
// let buffer = new Buffer(10);

// console.log(buffer);


/**
 * 00-ff
 * 0-255
 * 0000000 - 1111111
 * 0或1代表1位
 * 8bit = 1B
 * 1KB = 1024B
 * 1MB = 1024KB
 * 1GB = 1024MB
 * 1TG = 1024GB
 */
// 1.将字符串转化成二进制
// let str = "璇璇小可爱"
// let buffer = Buffer.from(str)

// console.log(buffer);
// console.log(buffer.length);
// console.log(str.length);
// console.log(buffer.toString());


/**
 * 初始化:确定的长度
 */

 let buffer2 = Buffer.alloc(20);
 buffer2[0] = 10
 buffer2[1] = 11
 buffer2[2] = 0xfc
 //console.log(buffer2);
 buffer2.forEach((item, index)=>{
     console.log(index + ':' + item);
 })