


const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();//引入后直接实例话

//配置路由
//路由： 根据不同的URL地址,加载不同的页面实现不同的功能，
router.get('/', async(ctx) => {//ctx：上下文context,包含了response和request等信息
  ctx.body = "首页" // 返回数据， 相当于 原生中的 res.writeHead()  res.end()
}).get('/news', async(ctx) => {
  ctx.body = "新闻页"
});


//启动路由
app
   .use(router.routes()) //启动路由
   .use(router.allowedMethods());
//在所有路由中间件之后调用，根据ctx.status设置response响应头


app.use( async(ctx, next) => {

  console.log(new Date());//匹配路由之前打印日期
  await next();//当前路由完成匹配之后继续向下匹配

})//第一个一个参数表示匹配对应路由，不填直接写函数表示匹配所有路由

//中间件：匹配路由之前和匹配路由完成做的一系列的操作
//  应用级中间件   路由级中间件   错误处理中间件     第三方中间件
//1. 执行任何代码
//2. 修改请求和响应对象
//3. 终结请求和响应循环
//4，调用堆栈中的下一个中间件
//如果get,post回调函数中，没有next参数，那么就匹配第一个路由，需要往下匹配就需要写 next()


//koa写法
app.use(async (ctx)=> {
  // 1. async: 让方法变成异步，async定义的方法返回的是一个promise对象
  // 2. await: 等待异步方法执行完成，可以用老获取异步方法里的数据，但是必须用在async方法里，会将异步转成同步
  ctx.body = "返回数据"
})

app.listen(3000);
