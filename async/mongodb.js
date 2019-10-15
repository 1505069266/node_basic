const MongoClient = require('mongodb').MongoClient

const assert = require('assert')

const url = 'mongodb://localhost:27017/'

// 通过将useNewUrlParser设置为true来避免“不建议使用当前URL字符串解析器”警告
//创建集合
// MongoClient.connect(url, {useNewUrlParser: true}, function(err, db){
//     if(err){
//         console.log(err);
//         return
//     };

//     console.log('数据库已连接');

//     let dbase = db.db('zhuxiaole')
//     console.log(111);
//     dbase.createCollection('eeee', function(err, res){
//         if(err){
//             console.log(err);
//             return
//         }
//         console.log('创建集合');

//         db.close()
//     })

// })


//插入数据   插入一条数据  方法insertOnt()
// MongoClient.connect(url, {useNewUrlParser: true}, (err, db)=>{
//     if(err) throw err;
//     let dbase = db.db('zhuxiaole')

//     let myobj = {name:'朱晓乐', age: 18, height: '170cm'}

//     dbase.collection('people').insertOne(myobj, (err, res)=>{
//         if(err) throw err;
//         console.log('数据插入成功');

//         db.close()
//     })
// })

//插入数据   插入多条数据  方法insertMany()
// MongoClient.connect(url, {useNewUrlParser: true}, (err, db)=>{
//     if(err) throw err;
//     let dbase = db.db('zhuxiaole')

//     let myobj = [
//         {name:'郑璇', age: 18, height: '160cm'},
//         {name:'张晓媛', age: 18, height: '158cm'},
//         {name:'诸叶青', age: 18, height: '175cm'},
//         {name:'翁浩楠', age: 18, height: '173cm'}
//     ]

//     dbase.collection('people').insertMany(myobj, (err, res)=>{
//         if(err) throw err;
//         console.log("插入的文档数量为: " + res.insertedCount);

//         db.close()
//     })
// })

//查询数据  方法find() 返回集合中的所有数据。
MongoClient.connect(url, {useNewUrlParser: true}, (err, db)=>{
    if(err) throw err
    //连接指定得集合
    let database = db.db('zhuxiaole') 
    // 查询的条件
    let query = {"name":"朱晓乐"}

    database.collection("people").find(query).toArray((err, result)=>{
        //返回所有得数据
        if(err) throw err
        //结果
        console.log(result);

        db.close()
    })
})

//修改数据  updateOne() 修改一条数据
// MongoClient.connect(url, {useNewUrlParser: true}, (err, db)=>{
//     if(err) throw err
//     //指定库
//     let database = db.db('zhuxiaole')
//     //查询条件
//     let query = {"name": "朱晓乐"}
//     //更新的数据
//     let updateStr = {$set: {"height":"180cm"}}

//     database.collection("people").updateOne(query, updateStr, (err, res)=>{
//         if(err)throw err
//         console.log("文档更新成功");
//         database.collection("people").find(query).toArray((err, result)=>{
//             if(err) throw err
//             console.log(result);
//             db.close()
//         })
//     })

// })

//修改多条数据  updateMany()
MongoClient.connect(url, {useNewUrlParser: true}, (err, db)=>{
    if(err) throw err
    //指定对应的数据表
    let database = db.db('zhuxiaole')
    //查询的条件
    let query = {}
})



