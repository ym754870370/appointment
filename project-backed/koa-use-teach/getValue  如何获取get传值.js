const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();//引入后直接实例话

//配置路由
//路由： 根据不同的URL地址,加载不同的页面实现不同的功能，
router.get('/', async(ctx) => {//ctx：上下文context,包含了response和request等信息
  ctx.body = "首页" // 返回数据， 相当于 原生中的 res.writeHead()  res.end()
}).get('/news', async(ctx) => {
  //从ctx中读取get传值
  console.log(ctx.query) //获取的是对象
  console.log(ctx.querystring) //获取的是一个字符串
  console.log(ctx.request)

  ctx.body = "新闻页"
});


//启动路由
app
   .use(router.routes()) //启动路由
   .use(router.allowedMethods());
//在所有路由中间件之后调用，根据ctx.status设置response响应头



//中间价



//koa写法
app.use(async (ctx)=> {
  // 1. async: 让方法变成异步，async定义的方法返回的是一个promise对象
  // 2. await: 等待异步方法执行完成，可以用老获取异步方法里的数据，但是必须用在async方法里，会将异步转成同步
  ctx.body = "返回数据"
})

app.listen(3000);
