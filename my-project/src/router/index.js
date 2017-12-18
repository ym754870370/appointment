import Vue from 'vue'
import Router from 'vue-router'
import showFoodInfos from '@/views/ShowFoodInfos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/showFoodInfos',
      name: 'showFoodInfos',
      component: showFoodInfos
    }
  ]
})
