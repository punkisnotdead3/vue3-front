import { createRouter, createWebHistory } from 'vue-router'
import { isMobileTerminal } from '../utils/flexible.js'
import mobileRoutes from './modules/mobile-routes.js'
import pcRoutes from './modules/pc-routes.js'
//createWebHistory   --路由模式路径不带#号(生产环境下不能直接访问项目,需要nginx转发)
//createWebHashHistory　　----路由模式路径带#号
const router = createRouter({
  history: createWebHistory(),
  routes: isMobileTerminal.value ? mobileRoutes : pcRoutes

})

export default router