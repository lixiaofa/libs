/*
 * @Descripttion: 
 * @Date: 2021-06-23 10:29:38
 * @LastEditors: Sima thief
 * @LastEditTime: 2021-06-23 11:06:50
 * @Author: Sima thief
 */
'use strict';


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
// module.exports = {  };

// function authUtil() {
//     // TODO
// }

