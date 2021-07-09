<!--
 * @Descripttion: 
 * @Date: 2021-07-01 16:49:44
 * @LastEditors: Sima thief
 * @LastEditTime: 2021-07-09 18:36:00
 * @Author: Sima thief
-->
# libs
> 工具类 ，ui类组件库 。主要用于解决前端实际开发中重复造轮子 。

# clone the project
https://github.com/lixiaofa/libs.git


# technology stack
lerna + rollup ， independent  ， 多包管理

# 扩展组件库 

## 你只需

+ 分辨组件类型 ，在packages目录下 ， 创建对应的文件夹（如：utils  , ui)  , 执行lerna create plugin-a-util packages/utils/plugin-a-util创建自己的组件包
+ 打包cnpm run build

+ 登录npm 
