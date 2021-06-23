<!--
 * @Descripttion: 
 * @Date: 2021-06-11 11:02:16
 * @LastEditors: Sima thief
 * @LastEditTime: 2021-06-23 11:34:29
 * @Author: Sima thief
-->
<template>
  <div id="nav">
    libslibslibslibslibs
    111
       <a-date-picker v-model:value="value1" />
    
  </div>
  <!-- <router-view /> -->
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Moment } from 'moment';
import { DatePicker } from "ant-design-vue";
import { setToken , getToken } from 'auth-util'
import request from 'request-util'


export default defineComponent({
  components: {
    ADatePicker: DatePicker
  },
  setup() {
    setToken('eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJicm93bjIiLCJjcmVhdGVkIjoxNjI0MjU5OTIwNjE0LCJleHAiOjE2MjQ4NjQ3MjB9.KOXK1WM2w8cjAh9BoNfVnlNcqdAtSaUa96CYWAaZus8GX0Zj0eDO1iqYEF1W0UQ-Vreq_e2MAoAFCD4elNETcA')
    
    function mainOrderPageList<T>(params:T){
      return request({
        url: '/order1/mainOrderPageList',
        method: 'post',
        data:  params 
      })
    }
    
    mainOrderPageList({pageNum: 1 })
    return {
      value1: ref<Moment>(),
     
    };
    
  },
});
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
