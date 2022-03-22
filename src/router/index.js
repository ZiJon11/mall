// 引入VueRouter
import VueRouter from 'vue-router'

// 引入组件
import Home from '../views/home/Home'
import Category from '../views/category/Category'
import Car from '../views/car/Car'
import Profile from '../views/profile/Profile'
import Detail from '../views/detail/Detail'

// 配置路由
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
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
  {
    name: 'detail',
    path: '/detail',
    component: Detail,
    props($route) {
      return {
        iid: $route.query.iid
      }
    }
  }
]

// 创建实例对象
const router = new VueRouter({
  mode: 'history',
  routes
})

// 导出router
export default router