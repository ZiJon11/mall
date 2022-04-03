import { request } from './request'

// 1.获取SlideBar组件需要的数据
export function getCategory() {
  return request({
    url: "/category"
  })
}

// 2.获取SubCategory组件需要的数据
export function getSubCategory(maitKey) {
  return request({
    url: "/subcategory",
    params: {
      maitKey
    }
  })
}

// 3.获取Category组件的推荐展示数据
export function getSubCategoryDetail(miniWallkey, type) {
  return request({
    url: "/subcategory/detail",
    params: {
      miniWallkey,
      type
    }
  })
}