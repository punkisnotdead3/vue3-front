import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import router from './router/index.js'
import { useREM } from '@/utils/flexible.js'

useREM()
createApp(App).use(router).mount('#app')
