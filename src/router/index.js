import Vue from 'vue'
import Router from 'vue-router'
const home = ()=>import('@/views/home')

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path:"/",redirect:'/home'},
    {path:'/home',component:home},


  ],
  scrollBehavior () {
    // return 期望滚动到哪个的位置
    // return{x:0,y:0}
  },
})

//路由守卫
router.beforeEach((to,from,next)=>{
    next()
})


export default router