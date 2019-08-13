let http = require('http')

let fs = require('fs')


//创建服务器
let server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url === '/test1.html'){
        console.log("进入test1");
        fs.readFile('./day4/test1.html',(err,data)=>{
            if(err){
                throw err
            }
            res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
            res.end(data)
        })
    }else if(req.url === '/test2.html'){
        console.log("进入test2");
        fs.readFile('./day4/test2.html',(err,data)=>{
            if(!err){
                res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
                res.end(data)
            }
        })
    }else if(req.url === '/index.css'){
        fs.readFile('./day4/index.css',(err,data)=>{
            if(!err){
                res.writeHead(200,{"Content-Type":"text/css"})
                res.end(data)
            }
        })
    }else if(req.url === '/'){
        res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
        res.end('我是首页')
    }else{
        res.writeHead(404,{"Content-Type":"text/html;charset=UTF-8"})
        res.write("页面不存在")
        res.end()
    }
})


//监听
server.listen(8080,"127.0.0.1");