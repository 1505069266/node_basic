let http = require('http')

// let url = require('url')
let {URL} = require('url')


http.createServer((req,res)=>{
    //let myurl = url.parse(req.url)
    let myUrl = new URL(req.url)
    console.log(myUrl);
    // console.log(myurl.search);
    // console.log(myurl);
    res.end("hello  world")
}).listen(8200,"127.0.0.1")