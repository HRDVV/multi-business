const Koa = require('koa')
const appRouter = require('./router')

const app = new Koa()

app.use(appRouter.routes()).use(appRouter.allowedMethods())

app.listen('3000', () => {
  console.log('node server is runing at localhost:3000')
})
