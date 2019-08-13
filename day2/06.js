//流的方法批量读取文件,视频,图片

//引入模块
let fs = require("fs")

//2.创建读入写出流
let rs = fs.createReadStream("img.gif")
let ws = fs.createWriteStream("it666.txt")

//3.监听流的打开和关闭
ws.once("open",()=>{
    console.log("写入通道已打开");
})
ws.once("close",()=>{
    console.log("写入通道已关闭");
})

rs.once("open",()=>{
    console.log("读取通道已打开");
})
rs.once("close",()=>{
    console.log("读取通道已关闭");
})

// 4.绑定data
rs.on("data",(data)=>{
    ws.write(data)

})

