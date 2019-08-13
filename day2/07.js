
//相当于06.js
//引入模块
let fs = require("fs")

//2.创建读入写出流
let rs = fs.createReadStream("img.gif")
let ws = fs.createWriteStream("it666.txt")

//3.创建管道
rs.pipe(ws)