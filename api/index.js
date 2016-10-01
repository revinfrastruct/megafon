const config = require('./config')
const app = require('koa')()
const router = require('koa-router')()

router.get('/channels/:id', require('./src/actions/channels/get'))

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(config.port)
