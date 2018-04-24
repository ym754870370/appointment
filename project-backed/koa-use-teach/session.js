const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();//引入后直接实例话
const session = require('koa-session');



// 配置session
app.keys = ['some secret hurr'];//cookie的签名

const CONFIG = {
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,//cookie 的过期时间
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** 在每次请求时都强制设置cookie, 这将重置 cookie 过期时间(默认： false) */
  renew: true , /** (boolean) renew session when session is nearly expired, 请求快过期时    重置ookie过期时间*/
};

app.use(session(CONFIG, app));
// or if you prefer all default config, just use => app.use(session(app));


//配置路由
//路由： 根据不同的URL地址,加载不同的页面实现不同的功能，
router.get('/', async(ctx) => {//ctx：上下文context,包含了response和request等信息
  ctx.body = "首页" // 返回数据， 相当于 原生中的 res.writeHead()  res.end()

  //获取session
  ctx.session.xxxx


  //设置session
  ctx.session.xxxx ＝ 'xxxxx';
});

router.get('/news', async(ctx) => {
  //从ctx中读取get传值

  ctx.body = "新闻页"
});

//实现动态路由
router.get('/action/:ad', async(ctx) => {

  //获取动态路由的传值
  console.log(ctx.params);

  ctx.body = "获取动态路由";
});





//启动路由
app
   .use(router.routes()) //启动路由
   .use(router.allowedMethods());
//在所有路由中间件之后调用，根据ctx.status设置response响应头



//中间价



app.listen(4000);
