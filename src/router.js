import Vue from 'vue'
import Router from 'vue-router'
const home = ()=>import('./views/home')
const info =()=>import('./views/info.vue')
const my = ()=>import('./views/my.vue')
const login = ()=>import('./views/login.vue')

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path:"/",redirect:'/home'},
    {path:'/home',component:home},
    {path:'/info',component:info},
    {path:'/my',component:my},
    {path:'/login',component:login}

  ],
  scrollBehavior () {
    // return 期望滚动到哪个的位置
    // return{x:0,y:0}
  }
})
