const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();//引入后直接实例话
const common = require('./module/common.js');//引入后直接实例话

//错误处理中间件
app.use(async (ctx, next) => {
  console.log("这是一个中间件");

  next();//会去执行下面的匹配路由操作，路由执行完毕后再执行下面的if判断

  if(ctx.status == 404) {
    ctx.body="这是一个404页面"
  } else {
    console.log(ctx.url);
  }
})
//配置路由
//路由： 根据不同的URL地址,加载不同的页面实现不同的功能，
router.get('/', async (ctx) => {//ctx：上下文context,包含了response和request等信息
  ctx.body = "首页" // 返回数据， 相当于 原生中的 res.writeHead()  res.end()
}).get('/news', async(ctx) => {
  ctx.body = "新闻页"
}).get('/login', async(ctx) => {
  ctx.body = "登录"
});


//启动路由
app
   .use(router.routes()) //启动路由
   .use(router.allowedMethods());
//在所有路由中间件之后调用，根据ctx.status设置response响应头


app.use( async(ctx, next) => {

  console.log(new Date());//匹配路由之前打印日期
  await next();//当前路由完成匹配之后继续向下匹配

})


//koa写法
app.use(async (ctx)=> {//  会先执行中间件 app.use 再去执行路由 router.get
  // 1. async: 让方法变成异步，async定义的方法返回的是一个promise对象
  // 2. await: 等待异步方法执行完成，可以用老获取异步方法里的数据，但是必须用在async方法里，会将异步转成同步
  ctx.body = "返回数据"
})

//接收post提交的数据
router.post('/login', async (ctx) => {
  //原生node.js在koa中获取表单提交的数据
  let data = await common.getPostData(ctx);

  console.log("data: ", data);

  ctx.body = data;
})

app.listen(3000,(err,res)=>{
  console.log("ojbk")
});
