
//异步打开文件操作

//1.引入模块
let fs = require("fs")

//2打开 文件
fs.open('it666_1.txt',"a",(err,fd)=>{
    console.log("777"); //这是异步输出
    //2.1判断是否出错
    if(!err){
        console.log(fd);
        //2.2写入文件
        fs.writeFile(fd,"zheyigeshenqidewnagzhang",(err)=>{
            //2.2.1写入成功
            if(!err){
                console.log("文件写入成功");
            }else{
                throw err
            }

            //2.3关闭文件
            fs.close(fd,(err)=>{
                if(!err){
                    console.log("文件已保存并关闭");
                }else{
                    throw err
                }
            })
        }); 
    }else{
        throw err
    }
})
console.log("hahah");//先执行这个

