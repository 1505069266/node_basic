//同步打开文件操作

// 引入模块
let  fs = require('fs')


//2.打开文件
let fd = fs.openSync("it666.txt","w")
//console.log(fd);

//3.写入内容
fs.writeSync(fd,'今天天地好');

//4.保存并退出
fs.closeSync(fd)

