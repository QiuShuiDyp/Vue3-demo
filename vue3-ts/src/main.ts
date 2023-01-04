/*
 * @Author: QiuShui
 * @Date: 2022-12-20 16:57:14
 * @LastEditors: Qiushui
 * @LastEditTime: 2022-12-20 17:13:33
 * @FilePath: /vue3-ts/src/main.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by 用户/公司名, All Rights Reserved. 
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
