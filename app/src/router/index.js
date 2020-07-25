const Router = require('koa-router')
const ResponseWraper = require('../model/response')

const router = new Router({
  prefix: '/app'
})

router.get('/flow/r/list', async ctx => {
  const data = [
    {
      step: 1,
      componentName: 'Flow1',
      flowName: '流程1',
      propertyName: 'flow1Params',
      relativeProperty: null,
      validatorFun: 'validator'
    },
    {
      step: 2,
      componentName: 'Flow2',
      flowName: '流程2',
      propertyName: 'flow2Params',
      relativeProperty: null,
      validatorFun: 'validator'
    },
    {
      step: 3,
      componentName: 'Flow3',
      flowName: '流程3',
      propertyName: 'flow3Params',
      relativeProperty: null,
      validatorFun: 'validator'
    },
    {
      step: 4,
      componentName: 'Flow4',
      flowName: '流程4',
      propertyName: 'flow4Params',
      relativeProperty: null,
      validatorFun: 'validator'
    }
  ]
  ctx.body = ResponseWraper.success(data)
})

module.exports = router
