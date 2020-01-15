// 导入axios
import axios from 'axios'
// 创建axios实例
const instance = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/app/v1_0'
})

// 设置拦截器
// 请求拦截器
instance.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
// 响应拦截器
instance.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default instance