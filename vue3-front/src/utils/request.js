import axios from 'axios'

console.log(import.meta.env.VITE_BASE_API)

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})

/**
 * 响应拦截器
 */
service.interceptors.response.use(response => {
  const { code, message, data } = response.data
  // 为0 就直接返回数据
  if (code === 0) {
    return data
  }
  // code 不为0 就返回错误
  return Promise.reject(new Error(message))
})


export default service