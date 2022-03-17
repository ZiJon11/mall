// 引入VueRouter
import VueRouter from 'vue-router'

// 引入组件
import Home from '../views/home/Home'
import Category from '../views/category/Category'
import Car from '../views/car/Car'
import Profile from '../views/profile/Profile'


// 配置路由
const routes = [
  {
    name: 'home',
    path: '/home',
    component: Home
  },
  {
    name: 'category',
    path: '/category',
    component: Category
  },  
  {
    name: 'car',
    path: '/car',
    component: Car
  },  
  {
    name: 'profile',
    path: '/profile',
    component: Profile
  },
]

// 创建实例对象
const router = new VueRouter({
  routes
})

// 导出router
export default router