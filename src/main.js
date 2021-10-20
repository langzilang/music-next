import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局样式文件
import '@/assets/scss/index.scss'
// import '@/assets/scss/icon.scss'
// import '@/assets/scss/reset.scss'
// import '@/assets/scss/mixin.scss'
// import '@/assets/scss/variable.scss'

createApp(App).use(store).use(router).mount('#app')
