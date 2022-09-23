
import { defineAsyncComponent } from 'vue'
//对外导出svg icon 这个组件
export default {
    // main.js createapp 中返回的实例
    install(app) {
        // app.component('m-svg-icon', svgIcon),
        //     app.component('m-popup', popup)
        // 这个是vite的特性
        const components = import.meta.glob('./*/index.vue')
        for (const [fullPath, fn] of Object.entries(components)) {
            const name = "m-" + fullPath.replace('./', '').split('/')[0]
            app.component(name, defineAsyncComponent(fn))
        }
    }
}