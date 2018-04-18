const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();//引入后直接实例话

//配置路由
//路由： 根据不同的URL地址,加载不同的页面实现不同的功能，
router.get('/', async(ctx) => {//ctx：上下文context,包含了response和request等信息
  ctx.body = "首页" // 返回数据， 相当于 原生中的 res.writeHead()  res.end()
});

router.get('/news', async(ctx) => {
  //从ctx中读取get传值

  ctx.body = "新闻页"
});

router.get('/action/:ad', async(ctx) => {
  //获取动态路由的传值
  console.log(ctx.params);

  ctx.body = "获取动态路由";
});
//实现动态路由



//启动路由
app
   .use(router.routes()) //启动路由
   .use(router.allowedMethods());
//在所有路由中间件之后调用，根据ctx.status设置response响应头



//中间价



app.listen(4000);
