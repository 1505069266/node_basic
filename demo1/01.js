let http = require('http')

http.createServer((req, res)=>{
    //设置响应头
    res.writeHead(200, {'Content-Type': 'text/plain'})

    //发送响应数据 "Hello world"
    res.end("Hello world")
}).listen(8888)
