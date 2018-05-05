const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();//引入后直接实例话
const DB = require('./module/db.js');
const common = require('./module/common.js');


const multer = require('koa-multer');//加载koa-multer模块
//文件上传
//配置
var storage = multer.diskStorage({
  //文件保存路径
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  //修改文件名称
  filename: function (req, file, cb) {
    var fileFormat = (file.originalname).split(".");
    cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
})
//加载配置
var upload = multer({ storage: storage });
//路由
router.post('/upload', upload.single('file'), async (ctx, next) => {
  ctx.body = {
    filename: ctx.req.file.filename//返回文件名
  }
})


//错误处理中间件
app.use(async(ctx, next)=> {
  await next();//会去执行下面的匹配路由操作，路由执行完毕后再执行下面的if判断
  console.log('ctx.status 2:', ctx.status);
  if(ctx.status == 404) {
    ctx.body="这是一个404页面"
  } else {
    console.log(ctx.url);
  }
})
//配置路由
//路由： 根据不同的URL地址,加载不同的页面实现不同的功能，
router.get('/', async(ctx) => {//ctx：上下文context,包含了response和request等信息
  let result = await DB.find('user', {});
  console.log("result: ", result);
  ctx.body = "首页" // 返回数据， 相当于 原生中的 res.writeHead()  res.end()
})
router.get('/news', async(ctx) => {
  ctx.body = "新闻页"
})


router.get('/release', async(ctx) => {
  let data = ctx.query.data;
  await DB.insert('article', JSON.parse(decodeURI(data)));
  ctx.body = {
    code: 200,
  };
})

router.get('/getArticleFoodList', async(ctx) => {
  let data = ctx.query.data;
  let result = await DB.find('article', JSON.parse(data));
  ctx.body = {
    code: 200,
    data: result
  };
})

router.get('/deleteAricle', async(ctx) => {
  let data = ctx.query.data;
  let string = data.split(",");
  let info = JSON.parse('{' + string[2] + ',' + string[3] + '}');

  let result = await DB.remove('article', info);

  if(result.result.n == 0) {
    ctx.body = {
      code: 404,
    };
  } else {
    ctx.body = {
      code: 200,
      data: result
    };
  }
})


//接收post提交的数据
router.post('/registeredAccount', async(ctx) => {
  let data = await common.getPostData(ctx);
  let string = data.split(",");
  let accounts = JSON.parse(string[0] + '}');
  let result = await DB.find('user', accounts);
  if(result.length == 0) {
    await DB.insert('user', JSON.parse(data));
    ctx.body = {
      code: 200,
    };
  } else {
    ctx.body = {
      code: 404,
    };
  }


})


router.post('/login', async (ctx) => {
  //原生node.js在koa中获取表单提交的数据
  let data = await common.getPostData(ctx);
  let string = data.split(",");
  let accounts = JSON.parse(string[0] + '}');
  let result = await DB.find('user', JSON.parse(data));
  if(result.length == 0) {
    ctx.body = {
      code: 404,
    };
  } else {
    ctx.body = {
      code: 200,
      data: result
    };
  }
})

router.post('/ModifyPassword', async (ctx) => {
  //原生node.js在koa中获取表单提交的数据
  let data = await common.getPostData(ctx);
  let string = data.split(",");
  let accounts = JSON.parse(string[0] + '}');
  let password = JSON.parse('{' + string[1]);
  console.log(accounts, password);
  let result = await DB.update('user', accounts, password);
  console.log('result: ', result.result.ok);
  if(result.result.n == 0) {
    ctx.body = {
      code: 404,
    };
  } else {
    ctx.body = {
      code: 200,
    };
  }
})

router.post('/EditUserInfo', async (ctx) => {
  //原生node.js在koa中获取表单提交的数据
  let data = await common.getPostData(ctx);
  let string = data.split(",");
  let accounts = JSON.parse(string[0] + '}');
  let result = await DB.update('user', accounts, JSON.parse(data));
  if(result.result.n == 0) {
    ctx.body = {
      code: 404,
    };
  } else {
    ctx.body = {
      code: 200,
    };
  }
})

//启动路由
app
   .use(router.routes()) //启动路由
   .use(router.allowedMethods());
//在所有路由中间件之后调用，根据ctx.status设置response响应头


app.use( async(ctx, next) => {

  // console.log(new Date());//匹配路由之前打印日期
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
app.use(async (ctx)=> {//  会先执行中间件 app.use 再去执行路由 router.get
  // 1. async: 让方法变成异步，async定义的方法返回的是一个promise对象
  // 2. await: 等待异步方法执行完成，可以用老获取异步方法里的数据，但是必须用在async方法里，会将异步转成同步
  // ctx.body = "返回数据"
})




app.listen(3333);
