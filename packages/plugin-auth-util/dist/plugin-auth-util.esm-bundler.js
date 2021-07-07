import Cookies from 'js-cookie';

/*
 * @Descripttion:
 * @Date: 2021-06-23 10:29:38
 * @LastEditors: Sima thief
 * @LastEditTime: 2021-07-07 17:34:20
 * @Author: Sima thief
 */
const Token = 'Token';
function getToken() {
    return Cookies.get(Token);
}
function setToken(token) {
    return Cookies.set(Token, token);
}
function removeToken() {
    return Cookies.remove(Token);
}

export { getToken, removeToken, setToken };
