'use strict';

var axios = require('axios');
var pluginAuthUtil = require('plugin-auth-util');
var antDesignVue = require('ant-design-vue');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);

/*
 * @Descripttion:
 * @Date: 2021-06-23 11:08:52
 * @LastEditors: Sima thief
 * @LastEditTime: 2021-07-07 18:37:14
 * @Author: Sima thief
 */
// create an axios instance
const service = axios__default.create({
    baseURL: process.env.VUE_APP_BASE_API,
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
});
// request interceptor
service.interceptors.request.use((config) => {
    console.log('config', config);
    // do something before request is sent
    config.headers['Token'] = pluginAuthUtil.getToken();
    return config;
}, error => {
    // do something with request error
    console.log('---', error); // for debug
    return Promise.reject(error);
});
// response interceptor
service.interceptors.response.use(
/**
 * If you want to get http information such as headers or status
 * Please return  response => response
*/
/**
 * Determine the request status by custom code
 * Here is just an example
 * You can also judge the status by HTTP Status Code
 */
response => {
    const res = response.data;
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
        // message({
        //     message: res.message || 'Error',
        //     type: 'error',
        //     duration: 5 * 1000
        //   })
        const success = () => {
            antDesignVue.message.success(res.message || 'Error');
        };
        success();
        // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
        return Promise.reject(new Error(res.message || 'Error'));
    }
    else {
        return res;
    }
}, err => {
    console.log('err' + err); // for debug
    const error = () => {
        antDesignVue.message.error(err.message || 'Error');
    };
    error();
    return Promise.reject(err);
});

module.exports = service;
