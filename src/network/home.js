// 导入封装好的 request.js 文件
import { request } from "./request"

// 请求RecommendView组件的展示数据
export function getHomeMultiData() {
  return request({
    url: '/home/multidata'
  })
}

// 请求首页的商品展示数据
export function getHomeGoodsList(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}