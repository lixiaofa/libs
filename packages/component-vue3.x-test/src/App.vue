<!--
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2021-07-20 17:36:33
 * @LastEditTime: 2021-07-20 20:07:26
 * @LastEditors: 司马老贼
-->
<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <date-picker></date-picker>
  </div>
  <!-- <router-view /> -->
</template>
<script lang="ts">

import { DatePicker } from "ant-design-vue";

import { setToken } from "plugin-auth-util";
import request from "plugin-request-util";
export default {
 components:{
   DatePicker
 },
 setup(){
   setToken(
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJicm93bjIiLCJjcmVhdGVkIjoxNjI0MjU5OTIwNjE0LCJleHAiOjE2MjQ4NjQ3MjB9.KOXK1WM2w8cjAh9BoNfVnlNcqdAtSaUa96CYWAaZus8GX0Zj0eDO1iqYEF1W0UQ-Vreq_e2MAoAFCD4elNETcA"
    );

    function mainOrderPageList<T>(params: T) {
      return request({
        url: "/order1/mainOrderPageList",
        method: "post",
        data: params,
      });
    }

    mainOrderPageList({ pageNum: 1 });

 }
}

</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
