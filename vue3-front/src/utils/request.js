import axios from 'axios'

const service = axios.create({
  baseURL: 'http://api',
  timeout: 5000
})

export default service