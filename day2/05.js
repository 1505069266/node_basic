//读取文件,视频或者图片,上传复制

// 1.引入模块
let fs = require('fs')

//2.读取文件
// fs.readFile('it666_3.txt',(err,data)=>{  //读取txt文件
//     if(!err){
//         console.log(data);
//         console.log(data.toString());
//     }else{
//         throw err
//     }
// })

fs.readFile('vim.gif',(err,data)=>{  //读取图片
    if(!err){
        //2.2写入图片文件
        fs.writeFile("img.gif",data,(err)=>{
            if(!err){
                console.log("写入成功");
            }else{
                throw  err
            }
        })
    }else{
        throw err
    }
})

