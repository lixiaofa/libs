/*
 * @Descripttion: 
 * @Date: 2021-06-23 10:29:38
 * @LastEditors: 司马老贼
 * @LastEditTime: 2021-07-22 18:45:02
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














