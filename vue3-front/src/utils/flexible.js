import { computed } from 'vue'
import {PC_DEVICE_WIDTH} from '../constants/index.js'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

// 判断是否是移动设备 --本地方便调试使用
export const isMobileTerminal = computed(() => {
  console.log('clientWidth:' + width.value)
  // width是一个响应式的值 所以用value
  return width.value < PC_DEVICE_WIDTH
})


// 线上用这种方式判断
export const isMobileTerminalBetter = computed(() => {
// App.vue
// 正则表达式判断设备的格式，可以判断市面上大部分设备，我这里只对 pc端 和 移动端 做了处理，写在了mounted上
  let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  return flag
})

