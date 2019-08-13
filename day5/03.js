

let express = require('express')

let app = express()

app.get('/',(req,res)=>{
   // res.send("Hello")
//    res.send({"name":"选之花"})
    // res.send("<input type='date'>")
    // res.status(400).send("你的请求错了")
    res.write('hahah')
    res.write("嘻嘻嘻")
    res.end("jieshu")
})

app.get('/:name/:age',(req,res)=>{
    console.log(req.params);
    let name = req.params["name"]
    let age = req.params["age"]
    res.end(name + age)
})

app.listen(3000)
