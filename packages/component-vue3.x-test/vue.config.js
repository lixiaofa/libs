/*
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2021-07-20 19:37:19
 * @LastEditTime: 2021-07-20 19:44:23
 * @LastEditors: 司马老贼
 */
"use strict";

const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  devServer: {
    proxy: "https://www.18jiuyu.com.cn:8080/",
  },
 
};
