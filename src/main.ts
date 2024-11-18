import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './assets/styles/dark.css'
import './assets/styles/global.scss'
import './assets/styles/override.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersistedState from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

const pinia = createPinia()
pinia.use(piniaPersistedState)

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
