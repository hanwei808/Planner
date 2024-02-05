import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import './styles/index.scss'
import elementPlus from './plugins/element-plus'

// @ts-expect-error: 暂时关闭router提示
createApp(App).use(router)
    .use(store, key)
    .use(elementPlus)
    .mount('#app')
