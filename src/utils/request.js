// axios请求工具
import axios from 'axios'
import { Message } from 'element-ui'

let instance = axios.create({
  baseURL: 'http://route.showapi.com',
  headers: {
    'Content-type': 'application/json'
  }
})

// 请求拦截器
instance.interceptors.request.use(
  config => config,
  error => {
    return Promise.reject(error)
  })

// 响应拦截器
instance.interceptors.response.use(
  response => response,
  error => {
    const code = error.response.status
    switch (code) {
      case 404:
        Message({
          message: '找不到资源',
          type: 'error',
          duration: 3 * 1000
        })
        break
      case 403:
        Message({
          message: '拒绝访问',
          type: 'error'
        })
        break
      default:
        Message({
          message: '未知错误',
          type: 'error',
          duration: 3 * 1000
        })
    }
    return Promise.reject(error)
  }
)

// get方法
function getInfo(url, data) {
  return instance.get(url, {
    params: data
  })
}

function postInfo(url, data) {
  return instance.post(url, data)
}

// post方法
export { getInfo, postInfo }
