

let express = require('express')

let app = express()

app.set('views', './day5/views')

app.set('view engine', "ejs")


app.get('/',(req,res)=>{
    res.render("index",{"lists":["张三",18,"篮球"]})
}).listen(3000,"127.0.0.1")