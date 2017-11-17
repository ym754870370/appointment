import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import userInfo from '@/components/userInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      component: userInfo
    }
  ]
})
