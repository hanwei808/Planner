import request from '@/utils/request'
import { ILogin, IUsers } from './types/user'
import { handleApiResponse } from './index';

export const verifyRefreshToken = (data: { token: string }) => {
    return handleApiResponse(request<{
        code: number
        message: string
        time: Date
        data: { accessToken: string }
    }>({
        url: '/verifyRefreshToken',
        method: 'get',
        data
    }))
}

export const getCaptcha = () => {
    return handleApiResponse(request<{
            code: number
            message: string
            time: Date
            data: {
                captcha: Blob
            }
        }>({
        url: '/captcha',
        method: 'get'
    }))
}

export const login = (data: {
    user: {
        username: string
        password: string
        imgcode: string
    }
}) => {
        return handleApiResponse(request<{
            code: number
            message: string
            time: Date
            data: ILogin
        }>({
            url: '/login',
            method: 'post',
            data
        }))
    }

export const logout = (data: {
    user: {
        username: string
        password: string
        imgcode: string
    }
}) => {
        return handleApiResponse(request<{
            code: number
            message: string
            time: Date
            data: ILogin
        }>({
            url: '/logout',
            method: 'post',
            data
        }))
    }

export const register = (data: {
        user: {
            username: string
            email: string
            password: string
            imgcode: string
        }
    }) => {
        return handleApiResponse(request<{
            code: number
            message: string
            time: Date
            data: ILogin
        }>({
            url: '/register',
            method: 'post',
            data
        }))
    }

export const users = () => {
    return handleApiResponse(request<{
        code: number
        message: string
        time: Date
        data: IUsers
    }>({
        url: '/users',
        method: 'get'
    }))
}

export const currentUser = () => {
    return handleApiResponse(request<{
        code: number
        message: string
        time: Date
        data: IUsers
    }>({
        url: '/currentUser',
        method: 'get'
    }))
}
