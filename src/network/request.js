// 引入axios
import axios from 'axios'

// 导出request函数，用于请求数据
export function request(config) {
  // 1.创建axios实例对象
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })

  // 2.响应成功后拦截
  instance.interceptors.response.use(res => {
    // 拦截响应后，必须返回，只需要返回data，因为只有data才是从服务器请求到的真实数据
    // console.log(res)
    return res.data
  }, err => {
    console.log(err)
  })

  // 3.发送真正的网络请求，instance(config)会返回一个Promise
  return instance(config)
}