export interface ILoginInfo {
    logo_square: string
    login_log: string
    slide: string[]
}

export interface ILogin {
    username: string
    password: string
    email: string
    bio: string
    image: string
    accessToken: string
    refreshToken: string
    user: ILogin
}

export interface IUsers {
    users: ILogin[]
}