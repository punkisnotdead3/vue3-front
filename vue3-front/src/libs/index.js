import svgIcon from './svg-icon/index.vue'
import popup from './popup/index.vue'
//对外导出svg icon 这个组件
export default {
    // main.js createapp 中返回的实例
    install (app){
        app.component('m-svg-icon',svgIcon),   
        app.component('m-popup', popup)   

    }
}