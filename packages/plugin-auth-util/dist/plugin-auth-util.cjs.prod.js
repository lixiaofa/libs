'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Cookies = require('js-cookie');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var Cookies__default = /*#__PURE__*/_interopDefaultLegacy(Cookies);

/*
 * @Descripttion:
 * @Date: 2021-06-23 10:29:38
 * @LastEditors: Sima thief
 * @LastEditTime: 2021-07-07 17:34:20
 * @Author: Sima thief
 */
const Token = 'Token';
function getToken() {
    return Cookies__default.get(Token);
}
function setToken(token) {
    return Cookies__default.set(Token, token);
}
function removeToken() {
    return Cookies__default.remove(Token);
}

exports.getToken = getToken;
exports.removeToken = removeToken;
exports.setToken = setToken;
