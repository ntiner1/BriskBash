import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import Users from '@/components/Users'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Users',
      component: Users
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
