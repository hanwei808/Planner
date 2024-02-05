import { IError, IResponse  } from './types/index';



export type ApiResponse<T> = {
  error: IError | null;
  response: IResponse<T> | null;
};

export function handleApiResponse<T>(promise: Promise<IResponse<T>>): Promise<ApiResponse<T>> {
  return promise
    .then(response => ({
      error: null,
      response: response,
    }))
    .catch(error => ({
      error,
      response: null,
    }));
}

export default handleApiResponse;