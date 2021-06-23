/*
 * @Descripttion: 
 * @Date: 2021-06-16 14:34:15
 * @LastEditors: Sima thief
 * @LastEditTime: 2021-06-21 15:21:41
 * @Author: Sima thief
 */
'use strict'
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    },
  },
  devServer: {
    proxy: 'https://www.18jiuyu.com.cn:8080/'
  }
  

 
}
