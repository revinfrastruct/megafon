const config = require('./config')
const app = require('koa')()
const IO = require('koa-socket')
const router = require('koa-router')()
const sample = require('lodash').sample
const casual = require('casual')

const io = new IO()
io.attach(app)

setInterval(function () {
  app.io.broadcast('events', {
    kind: sample(['bell', 'tweet', 'info']),
    title: casual.title,
    description: casual.description,
    createdAt: new Date()
  })
}, 5000)

router.get('/channels/:id', require('./src/actions/channels/get'))

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(config.port)
