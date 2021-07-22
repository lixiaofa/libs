<!--
 * @Descripttion: 
 * @Date: 2021-07-01 16:49:44
 * @LastEditors: 司马老贼
 * @LastEditTime: 2021-07-22 20:02:35
 * @Author: Sima thief
-->
# libs
> 工具类 ，ui类组件库 。主要用于解决前端实际开发中重复造轮子 。

# clone the project
https://github.com/lixiaofa/libs.git


# technology stack
lerna + rollup ， independent  ， 多包管理

# 扩展组件库 
## plugin-a-util 代表逻辑组件
## plugin-a-ui 代表ui组件

## 你只需

+ 在packages目录下 ，  执行lerna create plugin-a-util packages/plugin-a-util（packages/plugin-a-ui）创建自己的组件包
+ 打包yarn build
+ git add .
+ yarn commit (约定式提交规范)

+ git pull
+ 登录作者的npm 账号
npm:
sima_thief
Lxf3642224

+ 最后lerna publish

# 如果你想跑起来测试组件，你只需遵循lerna（yarn） 的文档

+ 如 lerna run --parallel serve  就能跑起来component-vue3.x-test 测试项目


# 如果你增加了新的组件，请完善约定式提交规范

+ 在.cz-config.js中添加你的组件 ， 如： scopes: [{ name: 'component-vue3.x-test' }, { name: 'plugin-auth-util' }, { name: 'plugin-request-util' } ， {name: 'packages/plugin-a-util'}],


## 最后欢迎大家fork ， 让我们一起避免前端实际开发中重复造轮子 , 提高工作效率
## 组件交流群










