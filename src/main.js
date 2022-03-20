// 引入Vue
import Vue from 'vue'
// 引入App组件, App组件是所有子组件的管理者, 负责汇总所有子组件
import App from './App.vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入router
import router from './router'




// 关闭Vue的生产提示
Vue.config.productionTip = false
// 使用VueRouter插件
Vue.use(VueRouter)
// 安装全局事件总线
Vue.prototype.$bus = new Vue()

// 创建Vue实例对象
new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
