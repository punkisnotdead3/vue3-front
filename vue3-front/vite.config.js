import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path,{ join } from 'path'
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),createSvgIconsPlugin({
    // 指定需要缓存的图标文件夹
    iconDirs:[path.resolve(process.cwd(),'src/assets/icons')],
    //指定symbolId格式
    symbolId:'icon-[name]'
  })],
  //指定软连接
  resolve: {
    alias: {
      '@': join(__dirname, '/src')
    }
  },
  // 代理配置
  server: {
    proxy: {
      // 代理所有/api的请求
      '/api': {
        // 代理请求之后的请求地址 这里每次anywhere运行的地址都不太一样，注意修改一下
        target: 'http://192.168.1.109:8000',
        //处理跨域
        changeOrigin: true
      }

    }
  }
})
