import { Axios } from 'axios';
import router from '@/router/index'
import { setAccessToken } from './storage'

export class AxiosRetry {
  // 维护一个promise
  private fetchNewTokenPromise: Promise<unknown> | null = null;

  // 一些必须的配置
  private baseUrl: string;
  private url: string;
  private getRefreshToken: () => string | null;
  private unauthorizedStatus: string | number;

  constructor({
    baseUrl,
    url,
    getRefreshToken,
    unauthorizedStatus = 401,
  }: {
    baseUrl: string;
    url: string;
    getRefreshToken: () => string | null;
    unauthorizedStatus?: number | string;
  }) {
    this.baseUrl = baseUrl;
    this.url = url;
    this.getRefreshToken = getRefreshToken;
    this.unauthorizedStatus = unauthorizedStatus;
  }

  requestWrapper<T>(request: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 先把请求函数保存下来
      const requestFn = request;
      return request()
        .then(resolve)
        .catch(err => {
          if (err?.response?.status === this.unauthorizedStatus && err?.config?.url !== this.url) {
            if (!this.fetchNewTokenPromise) {
              this.fetchNewTokenPromise = this.fetchNewToken();
            }
            this.fetchNewTokenPromise
              .then(() => {
                // 获取token成功后，重新执行请求
                requestFn().then(resolve).catch(reject);
              })
              .finally(() => {
                // 置空
                this.fetchNewTokenPromise = null;
              });
          } else {
            if (err?.response?.status === 401) {
              // refresh token 过期，清空 access token 并跳转到登录页
              setAccessToken('')
              router.push('/login')
            }
            reject(err);
          }
        });
    });
  }

  // 获取token的函数
  fetchNewToken() {
    return new Axios({
      baseURL: this.baseUrl,
    })
    .get(this.url, {
      headers: {
        Authorization: `Bearer ${this.getRefreshToken()}`,
      },
    })
    .then(res => {
      console.log('success', res)
      if (res.status === 401) {
        setAccessToken('')
        router.push('/login')
      } else {
        // 刷新 access token
        const accessToken = JSON.parse(res.data)?.data?.accessToken;
        setAccessToken(accessToken)
      }
    })
    .catch(err => {
      console.log('error', err)
      if (err?.response?.status === 401) {
        // refresh token 过期，清空 access token 并跳转到登录页
        setAccessToken('')
        router.push('/login')
      }
      return Promise.reject(err);
    });
  }
}