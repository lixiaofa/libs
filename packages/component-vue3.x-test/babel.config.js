/*
 * @Descripttion: 
 * @Date: 2021-06-11 11:02:16
 * @LastEditors: Sima thief
 * @LastEditTime: 2021-06-16 17:52:46
 * @Author: Sima thief
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      'import',
      {
        libraryName: 'ant-design-vue',
        libraryDirectory: 'es',
        style: 'css'
      }
    ]
  ]
};
