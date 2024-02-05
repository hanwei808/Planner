export interface IResponse<T> {
    code: number
    message: string
    time: Date
    data: T
}

export interface IError {
    code: number
    message: string
    time: Date
    data: Array<object>
}