/*
 * @Descripttion: 
 * @Date: 2021-06-23 10:29:38
 * @LastEditors: 司马老贼
 * @LastEditTime: 2021-07-22 17:10:34
 * @Author: Sima thief
 */




import Cookies from 'js-cookie'
const TOKEN = 'TOKEN'


export function getToken() {
    return Cookies.get(TOKEN)
}
export function setToken(token: string) {
    return Cookies.set(TOKEN, token)
}
export function removeToken() {
    return Cookies.remove(TOKEN)
}














