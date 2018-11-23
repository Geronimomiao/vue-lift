import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import info from '@/components/info/info'
import v_function from '@/components/function/function'
import connect from '@/components/connect/connect'
import v_login2 from '@/components/login/login2'
import register from '@/components/register/register'
import message from '@/components/message/message'
import user from '@/components/user/user'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index,
      children: [
        {
          path: 'connect',
          name: 'connect',
          component: connect
        },
        {
          path: '/',
          name: 'function',
          component: v_function
        }
      ]
    },
    {
      path: '/info',
      name: 'info',
      component: info,
      children: [
        {
          path: '/',
          name: 'v_login2',
          component: v_login2
        },
        {
          path: 'register',
          name: 'register',
          component: register
        },
        {
          path: 'user',
          name: 'user',
          component: user
        }
      ]
    },
    {
      path: '/message',
      name: 'message',
      component: message
    }
  ]
})
