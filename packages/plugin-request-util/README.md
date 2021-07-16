<!--
 * @Descripttion: 
 * @Date: 2021-06-23 11:08:52
 * @LastEditors: Sima thief
 * @LastEditTime: 2021-07-07 17:33:00
 * @Author: Sima thief
-->
# `request-util`

> axios 的二次封装

## Usage

```
import request from 'plugin-request-util'

function mainOrderPageList<T>(params:T){
      return request({
        url: '/order1/mainOrderPageList',
        method: 'post',
        data:  params 
      })
    }
```
