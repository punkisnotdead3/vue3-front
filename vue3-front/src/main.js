import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'
import router from './router/index.js'
import { useREM } from '@/utils/flexible.js'
import mLibs from './libs'
useREM()
createApp(App).use(router).use(mLibs).mount('#app')
