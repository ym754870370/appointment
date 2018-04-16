import Vue from 'vue'
import Router from 'vue-router'
import ShowFoodInfos from '@/views/ShowFoodInfos'
import UserInfo from '@/views/UserInfo'
import AboutFood from '@/views/AboutFood'
import Page from '@/views/Page'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Index from '@/views/Index'
import Release from '@/views/Release'
import EditUserInfo from '@/views/EditUserInfo'
import ModifyPassword from '@/views/ModifyPassword'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/ShowFoodInfos',
      name: 'ShowFoodInfos',
      component: ShowFoodInfos,
    },
    {
      path: '/UserInfo',
      name: 'UserInfo',
      component: UserInfo
    },
    {
      path: '/AboutFood',
      name: 'AboutFood',
      component: AboutFood
    },
    {
      path: '/Page',
      name: 'Page',
      component: Page
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Release',
      name: 'Release',
      component: Release
    },
    {
      path: '/EditUserInfo',
      name: 'EditUserInfo',
      component: EditUserInfo
    },
    {
      path: '/ModifyPassword',
      name: 'ModifyPassword',
      component: ModifyPassword
    }
  ]
})
