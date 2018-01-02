import Vue from 'vue'
import Router from 'vue-router'
import ShowFoodInfos from '@/views/ShowFoodInfos'
import UserInfo from '@/views/UserInfo'
import AboutFood from '@/views/AboutFood'
import Page from '@/views/Page'

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
    }
  ]
})
