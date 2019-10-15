const fs = require('fs')

fs.readFile('it66.txt', (err,res)=>{
    if(err)throw err
    const buf = Buffer.from(res, 'UTF-8')

    console.log(buf.toString("hex"));
})