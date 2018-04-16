const koa = require('Koa');
const app = new koa();


//配置路由

//中间价

//express 写法


//koa写法
app.use(async (ctx)=> {// 1. async: 让方法变成异步  2. await: 等待异步方法执行完成，可以用老获取异步方法里的数据，但是必须用在异步方法里
  ctx.body = "返回数据"
})

app.listen(3000);
