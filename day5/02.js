
let express = require('express')

let app = new express()

app.use("/test",express.static("./day5/public"))

app.get('/',(req,res)=>{
    res.send("res.toString()")
})

app.listen(8080)