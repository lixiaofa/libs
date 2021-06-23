/*
 * @Descripttion: 
 * @Date: 2021-06-11 11:02:16
 * @LastEditors: Sima thief
 * @LastEditTime: 2021-06-18 16:59:50
 * @Author: Sima thief
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './utils/request/request'

const app = createApp(App)




app.use(store).use(router).mount("#app");
