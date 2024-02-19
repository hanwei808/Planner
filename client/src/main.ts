import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import './styles/index.scss'
import elementPlus from './plugins/element-plus'
import InlineSvg from 'vue-inline-svg'

// @ts-expect-error: 暂时关闭router提示
createApp(App).use(router)
    .use(store, key)
    .use(elementPlus)
    .component('inline-svg', InlineSvg)
    .mount('#app')

import { createVersionPolling } from "version-polling";

createVersionPolling({
    appETagKey: "__APP_ETAG__",
    pollingInterval: 5 * 1000, // 单位为毫秒
    silent: String(import.meta.env.MODE) === "development", // 开发环境下不检测
    onUpdate: (self) => {
        // 当检测到有新版本时，执行的回调函数，可以在这里提示用户刷新页面
        const result = confirm("页面有更新，点击确定刷新页面！");
        if (result) {
            self.onRefresh();
        } else {
            self.onCancel();
        }
    },
});