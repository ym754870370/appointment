let MongoClient = require('mongodb').MongoClient;

let dbUrl = 'mongodb://localhost:27017/';

const dbName = 'koa';

//连接数据库
 MongoClient.connect(dbUrl, (err, client) => {
   if (err) {
     console.log(err);
     return;
   }

   let db = client.db(dbName);

   //查询数据
   let result = db.collection('user').find({});

   result.toArray((err,docs) => {
     console.log(docs);
   })

   //增加数据
   db.collection('user').insertOne({'username': 'msdaing', 'age': 23, 'sex': '男'}, function(err, result) {
     if(!err) {
       console.log('增加数据成功');

       client.close();
     }
   });

 })
