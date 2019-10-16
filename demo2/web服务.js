let http = require('http')
let fs = require('fs')
let url = require('url')

//创建服务器
http.createServer((req,res)=>{
    //请求解析,包括文件名
    let pathname = url.parse(req.url).pathname

    //输出请求的文件名
    console.log("请求文件:" + pathname);

    //从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1), (err, data)=>{
        if(err){
            console.log(err);
            //输出404
            res.writeHead(404, {'Content-Type':'text/html'})
        }else{
            //输出状态吗200
            res.writeHead(200, {'Content-Type': 'text/html'})

            res.write(data.toString())
        }
        res.end()

    })

}).listen(8080)