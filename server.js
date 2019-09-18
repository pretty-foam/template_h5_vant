const Koa = require('koa')
const cors = require('koa-cors')
const Router = require('koa-router')
const router = new Router()
const app =new Koa()
app.use(cors())
router.get('/test',async ctx=>{
    console.count('调用了')
    ctx.set('Content-Type','text/event-stream')
    ctx.body ='111111111111'
})
app.use(router.routes())
app.listen(8888)