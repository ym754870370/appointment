exports.getPostData = function(ctx) {
  //获取数据 异步
  return new Promise(function(resolve, reject){

    try {

      let str = '';

      ctx.req.on('data',function(chunk) {

        str += chunk;
        console.log('chunk: ', chunk);

      })

      ctx.req.on('end',function(chunk) {

        resolve(str);

      })

    } catch (e) {

      reject(e);

    }

  })
}
