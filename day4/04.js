let http = require('http')

// let url = require('url')
let url = require('url')


http.createServer((req,res)=>{
    let myurl = url.parse(req.url)
    console.log(myurl.search);
    console.log(myurl);
    
    res.end("hello  world")
}).listen(80,"127.0.0.1")