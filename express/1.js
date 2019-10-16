//express_demo文件
let express = require('express')
let app = express()
let fs = require('fs')
let url = require('url')

app.use(express.static(__dirname + '/public'));//显示图片需要静态资源   用express来实现

app.get('/', (req, res)=>{
    res.send('Hello world')
})

app.get('/index', (req,res)=>{

    // console.log(req.app);
    console.log(req.baseUrl);
    fs.readFile(__dirname + '/' + '1.html', (err, data)=>{
        res.send(data.toString())
    })
})

app.get('/listUsers', (req,res)=>{
    fs.readFile(__dirname + '/' + "users.json", "utf8", (err, data)=>{
        console.log(data);
        res.send(data)
    })
})

let server = app.listen(8081, ()=>{

    let host = server.address().address
    let port = server.address().port

    console.log('应用实例,访问地址localhost:8081',host,port);
})