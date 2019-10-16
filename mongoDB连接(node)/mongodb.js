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


// 插入数据   插入一条数据  方法insertOnt()
MongoClient.connect(url, {useNewUrlParser: true}, (err, db)=>{
    if(err) throw err;
    let dbase = db.db('zhuxiaole')

    let myobj = {name:'朱晓乐', age: 18, height: '170cm'}

    dbase.collection('people').insertOne(myobj, (err, res)=>{
        if(err) throw err;
        console.log('数据插入成功');

        db.close()
    })
})

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

//查询数据  方法find() 返回集合中的所有数据。  有条件查询符合条件的  没条件返回全部的数据
// MongoClient.connect(url, {useNewUrlParser: true}, (err, db)=>{
//     if(err) throw err
//     //连接指定得集合
//     let database = db.db('zhuxiaole') 
//     // 查询的条件
//     let query = {"name":"朱晓乐"}

//     database.collection("people").find(query).toArray((err, result)=>{
//         //返回所有得数据
//         if(err) throw err
//         //结果
//         console.log(result);

//         db.close()
//     })
// })

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
// MongoClient.connect(url, {useNewUrlParser: true}, (err, db)=>{
//     if(err) throw err
//     //指定对应的数据表
//     let database = db.db('zhuxiaole')
//     //查询的条件
//     let query = {"height": "170cm"}
//     //更新的数据
//     let updateStr = {$set: {"height": "180cm"}}

//     database.collection("people").updateMany(query, updateStr, (err, data)=>{
//         if(err)throw err
//         console.log(data.result.nModified + "条文档被更新");
//         db.close()
//     })
// })


// 删除一条数据
// MongoClient.connect(url, {useNewUrlParser:true}, (err, db)=>{
//     if(err) throw err
//     let database = db.db('zhuxiaole')
//     let query = {"name": "诸叶青"}

//     database.collection("people").deleteOne(query, (err, obj)=>{
//         if(err) throw err
//         console.log("删除成功");
//         db.close()
//     })
// })

//删除多条数据
// MongoClient.connect(url,{useNewUrlParser: true}, (err, db)=>{
//     if(err)throw err
//     let database = db.db('zhuxiaole')
    
//     let query = {name: "猪头"}

//     database.collection('people').deleteMany(query, (err, obj)=>{
//         if(err) throw err
//         console.log(obj.result.n + "条数据");
//         db.close()
//     })
// })


// 排序 sort()方法  1表示升序  -1表示降序
// MongoClient.connect(url, {useNewUrlParser: true}, (err,db)=>{
//     if(err) throw err
//     let database = db.db('zhuxiaole')
//     let mysort = {height: -1}
//     database.collection('people').find().sort(mysort).toArray((err,res)=>{
//         if(err)throw err
//         console.log(res);
//         db.close()
//     })
// })


//分页查询 limit()方法  该方法只接受一个参数, 指定了返回的条数
// MongoClient.connect(url, {useNewUrlParser: true}, (err,db)=>{
//     if(err) throw err
//     let database = db.db('zhuxiaole')
//     database.collection('people').find().limit(2).toArray((err,res)=>{
//         if(err)throw err
//         console.log(res);
//         db.close()
//     })
// })
// 如果要指定跳过的跳湖是,使用 skip()方法 
// MongoClient.connect(url, {useNewUrlParser: true}, (err,db)=>{
//     if(err) throw err
//     let database = db.db('zhuxiaole')
//     database.collection('people').find().skip(2).limit(2).toArray((err,res)=>{
//         if(err)throw err
//         console.log(res);
//         db.close()
//     })
// })

//连接操作 未完成
//MongoDB不是一个关系性数据库,但我们可以使用$lookup来实现左连接
// MongoClient.connect(url, {useNewUrlParser: true}, (err, db)=>{
//     if(err)throw err
//     let database = db.db('zhuxiaole')
//     database.collection('people1').aggregate([
//         {
//             $lookup:{
//                 from: 'people',
//                 localField: 'name',
//                 foreignField: 'name',
//                 as: ''
//             }
//         }
//     ])
// })

//删除集合   drop()方法
// MongoClient.connect(url, {useNewUrlParser: true}, (err, db)=>{
//     if(err) throw err
//     let database = db.db('local')

//     database.collection('people').drop((err, delOK)=>{
//         if(err)throw err
//         if(delOK){
//             console.log(delOK,'集合已删除');
//         }
//         db.close()
//     })
// })