/*
 * @Descripttion: 
 * @Date: 2021-06-23 11:08:52
 * @LastEditors: 司马老贼
 * @LastEditTime: 2021-07-22 15:52:55
 * @Author: Sima thief
 */



import axios, { AxiosRequestConfig } from 'axios'
import { getToken } from 'plugin-auth-util'
import { message } from "ant-design-vue";

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5*1000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        console.log('config', config)
        // do something before request is sent
        

        config.headers['Token'] = getToken()
        return config
    },
    error => {
      
        // do something with request error
        console.log('---' , error) // for debug
        return Promise.reject(error)
    }
)

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
        const res = response.data

        // if the custom code is not 20000, it is judged as an error.
        if (res.code !== 200) {
            // message({
            //     message: res.message || 'Error',
            //     type: 'error',
            //     duration: 5 * 1000
            //   })
            const success = () => {
                message.success(res.message || 'Error');
            };
            success()
            // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;

            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    err => {
      
        console.log('err' + err) // for debug
        const error = () => {
            message.error(err.message || 'Error');
        };
        error()
        return Promise.reject(err)
    }
)

export default service

