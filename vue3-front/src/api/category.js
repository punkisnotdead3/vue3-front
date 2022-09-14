import request from '../utils/request.js'

// 请求分类列表
export const getCategory = () => {
  return request({
    url: '/category'
  })
}