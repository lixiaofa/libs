<!--
 * @Description: 
 * @Author: 司马老贼
 * @Date: 2021-07-20 17:36:56
 * @LastEditTime: 2021-07-22 19:25:11
 * @LastEditors: 司马老贼
-->
# component-vue3.x-test（用来测试组件）

# 如果你想跑起来测试组件，你只需遵循lerna（yarn） 的文档

+ 如 lerna run --parallel serve  就能跑起来component-vue3.x-test 测试项目
+ 然后引入你写好的组件： lerna add module-1 --scope=module-2
+ 就可以看到你写的组件是否符合你的预期



# 当然你也可以创建自己的测试项目如： component-xxx-test（用来测试组件） , 创建方式同理创建组件