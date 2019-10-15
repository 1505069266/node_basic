let fs = require('fs')

let syncdata = fs.readFileSync('it66.txt')  //同步读取方法

console.log(syncdata); //读取的是二进制的

console.log(syncdata.toString()); //转化成字符

let asyncdata = fs.readFile('it66.txt', (err, res)=>{
    if(err)throw err  //异步读取文件数据
    console.log(res.toString());
})


