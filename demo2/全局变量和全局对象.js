console.log(__filename); //当前文件的路径

console.log(__dirname); //当前文件所在的目录

//输出到终端
process.stdout.write("Hello World" + "\n")

//通过参数读取
process.argv.forEach((val, index, array)=>{
    console.log(index + ":" + val);
})

//获取执行路径
console.log(process.execPath);


//平台信息
console.log(process.platform);

//输出当前目录
console.log(process.cwd());

//输出当前版本
console.log(process.version);

//内存使用情况
console.log(process.memoryUsage());