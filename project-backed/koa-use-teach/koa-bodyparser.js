const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();//引入后直接实例话
const bodyParser = require('koa-bodyparser');//获取数据插件
const common = require('./module/common.js');


app.use(bodyParser());

//错误处理中间件
app.use(async (ctx, next) => {

  next();//会去执行下面的匹配路由操作，路由执行完毕后再执行下面的if判断

  // if(ctx.status == 404) {
  //   ctx.body="这是一个404页面"
  // } else {
  //   console.log(ctx.url);
  // }
})
//配置路由
//路由： 根据不同的URL地址,加载不同的页面实现不同的功能，
router.get('/', async (ctx) => {//ctx：上下文context,包含了response和request等信息
  ctx.body = "首页" // 返回数据， 相当于 原生中的 res.writeHead()  res.end()
});
router.get('/news', async(ctx) => {
  ctx.body = "新闻页"
});

//接收post提交的数据
router.post('/login', async (ctx) => {
  console.log('ctx.request.body: ', ctx.request.body);
  ctx.body = ctx.request.body;
})

//启动路由
app
   .use(router.routes()) //启动路由
   .use(router.allowedMethods());
//在所有路由中间件之后调用，根据ctx.status设置response响应头





app.listen(3000,(err,res)=>{
  console.log("ojbk")
});
