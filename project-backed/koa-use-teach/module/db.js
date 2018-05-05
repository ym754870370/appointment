//db库
let MongoClient = require('mongodb').MongoClient;
let Config = require('./config.js');

class Db {

  static getInstance() { //单例 解决多次实例化 实例不共享的问题
    if(!Db.instance) {
      Db.instance = new Db();
    }
    return Db.instance;
  }

  constructor () {
    this.dbClient='';//属性放db对象
    this.connect(); //初始化的时候连接数据库
  }

  connect() {
    let that = this;
    return new Promise((resolve, reject) => {
      if(!that.dbClient){//解决多次连接数据库的问题
        MongoClient.connect(Config.dbUrl, (err, client) => {
          if(err) {
            reject(err);
          } else {
            that.dbClient = client.db(Config.dbName);
            resolve(that.dbClient);
          }
        });
      } else {
        resolve(that.dbClient);
      }

    })

  }

  find(collectionName, json) {//数据库查询

    return new Promise((resolve, reject) => {
      this.connect().then((db) => {
        let result = db.collection(collectionName).find(json);

        result.toArray((err, docs) => {
          if(err) {
            reject(err);
          } else {
            resolve(docs);
          }
        })
      })
    })


  }




  insert(collectionName, json) {
    return new Promise((resolve, reject) => {
      this.connect().then((db) => {
        db.collection(collectionName).insertOne(json, (err, result) => {// 利用原生insertOne方法去添加数据，并执行回调函数
          if(err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      })
    })
  }

  remove(collectionName, json) {
    return new Promise((resolve, reject) => {
      this.connect().then((db) => {
        db.collection(collectionName).removeOne(json, (err, result) => {
          if(err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      })
    })
  }

  update(collectionName, json1, json2) {
    return new Promise((resolve, reject) => {
      this.connect().then((db) => {
        //数据库写法： db.user.update({}, {$set: {}})
        db.collection(collectionName).updateOne(json1, {
          $set: json2
        }, (err, result) => {
          if(err) {
            reject(err);
          } else {
            resolve(result);
          }
        })
      })
    })
  }
}


// let myDb = Db.getInstance();
//
// myDb.find('user', {username: "ming", 'age': 21}).then((data) => {
//   console.log(data);
// });

module.exports = Db.getInstance();
