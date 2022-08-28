import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './styles/index.scss'
import router from './router/index.js'


createApp(App).use(router).mount('#app')
