

let express = require('express')

let app = express()

app.get('/',(req,res)=>{
    console.log(req.url);
    
    res.send("hello,world")
})

app.get('/html5',(req,res)=>{
    console.log(req.url);
    
    res.send("HTML5")
})
app.get('/html5/c1',(req,res)=>{
    console.log(req.url);
    
    res.send("HTML5--c1")
})

app.get('/html5/c1/:name',(req,res)=>{
    console.log(req.url);
    console.log(req.params.name);
    
    res.send("HTML5--c1")
})

app.listen(80)