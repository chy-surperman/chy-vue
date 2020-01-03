import Vue from 'vue'
import Router from 'vue-router'
import appindex from '@/components/home/appindex'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/index',
      name: 'appindex',
      component: appindex
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
