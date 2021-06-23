/*
 * @Descripttion: 
 * @Date: 2021-06-17 11:20:08
 * @LastEditors: Sima thief
 * @LastEditTime: 2021-06-17 15:57:30
 * @Author: Sima thief
 */
import Cookies from 'js-cookie'
const Token = 'Token'


export function getToken() {
    return Cookies.get(Token)
}


export function setToken(token: string) {
    return Cookies.set(Token, token)
}

export function removeToken() {
    return Cookies.remove(Token)
}