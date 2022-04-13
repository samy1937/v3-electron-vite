import { request } from '@/utils/service'

// 获取验证码
export function getCaptchaCode(data: any) {
    return request({
        url: '/api/v1/user/getCaptchaCode',
        method: 'get',
        params: data
    })
}

// 登录
export function login(data: any) {
    return request({
        url: '/api/v1/user/login',
        method: 'post',
        data
    })
}