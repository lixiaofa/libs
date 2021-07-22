/*
 * @Descripttion: 
 * @Date: 2021-06-23 10:29:38
 * @LastEditors: 司马老贼
 * @LastEditTime: 2021-07-22 15:54:09
 * @Author: Sima thief
 */




import Cookies from 'js-cookie'
const token = 'token'


export function getToken() {
    return Cookies.get(token)
}
export function setToken(token: string) {
    return Cookies.set(token, token)
}
export function removeToken() {
    return Cookies.remove(token)
}














