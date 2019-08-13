## node基础记录
### HTTP
#### * 什么是协议:约束双方规范的准则
#### 什么是http协议
##### * HTTP,超文本传输协议(HyperText Transfer Protocal)是互联网上应用最广泛的一种协议
##### * 所有的WWW文件都必须遵守这个标准
##### * 设计HTTP最初的目的是为了提供一种发布和接受HTML页面的方法
##### * 约束请求与响应的规则
#### HTTP组成部分
##### * 请求
##### * 响应
##### * 请求与响应都是成对出现的
#### 请求的发送方法
##### * 1.通过浏览器的地址栏
##### * 2.通过html当中的form表单
##### * 3.通过a链接的href
##### * 4.src属性
#### HTTP请求
##### * 请求行
###### * 请求方式[]
* post
* get
###### * 请求的资源
* /myds/ds/name=dsd/dd
###### * 协议版本
* HTTP/1.0,发送请求,创建一次连接,获得一个web资源,连接断开
* HTTP/1.1,发送请求,创建一次连接,获得多个web资源,连接保存.
##### * 请求头
###### * 常见请求头
**Refer:浏览器通知服务器,当前请求来自何处.如果是直接访问,则不会有这个头,常用于:防盗链**
**If-Modified-Since:浏览器通知服务器,本地缓存的最后变更时间**
**Cookie:用于存放浏览器缓存的cookie信息**
**User-Agent:浏览器通知服务器,客户端浏览器与操作系统相关信息**
**Connection:保持连接状态,Keep-Alive连接中,close已关闭**
**Host:请求的服务器主机名**
**Content-Length:请求体长度**
**Content-Type:如果是POST请求,会有这个头,默认值为`application/x-www-form-urlencoded`,表示请求体的格式**
**Accpet:浏览器可支持的MIME类型,文件类型的一种描述方式**
**Accpet-Encoding:浏览器通知服务器,浏览器支持的数据压缩格式,如:GZIP压缩**
**Accept-Language:浏览器通知服务器,浏览器支持的语言**
##### * 请求体
###### * 当请求方式是post时,请求体会有请求的参数
###### * 如果请求方式为get,那么请求参数不会出现在请求体中,会拼接在url地址后面
#### HTTP响应
##### * 响应行
###### * HTTP协议
###### * 状态码 
**200:请求成功**
**302:请求重定向**
**304:请求资源没有改变,访问本地缓存**
**404:请求资源不存在,通常是用户路径编写错误,也可能是服务器资源已删除**
**500:服务器内部错误,通常程序抛异常**
##### * 响应头
###### * 常见请求头
**Location:指定响应的路径,需要与状态码302配合使用,完成跳转**
**Content-Type:响应正文的类型(MIME类型)**
**Content-Disposition:通过浏览器以下载方式解析正文**
**Set-Cookie:服务器向浏览器写入cookie**
**Content-Encoding:服务器使用的压缩格式**
**Content-length:响应正文的长度**
**Refresh:定时刷新**
**Server:服务器名称,默认值:'Apache-Coyote/1.1.可通过conf/server.xml配置修改'**
**Last-modified:服务器通知浏览器,文件的最后修改时间**
###### * 响应体
**响应体是服务器回写给客户端的页面正文**
**浏览器将正文加载到内存**
**然后解析渲染显示页面内容**
###### * 请求方式
**`OPTIONS``GET``POST``PUT``DELETE``CONNECT``TRACE``HEAD`
### node模块化开发:NPM
#### CommonJS
##### * 模块引用
##### * 模块定义
##### * 模块标识
### exports和module.exports的区别
#### * 值类型和引用类型的区别
#### * 两者区别
**exports只能使用`.`语法来向外暴露内部变量: exports.xxx = xxx;**
**module.exports既可以通过`.`语法,也可以直接赋值一个对象:module.exports.xxx = yyy; module.exports = {xxx:yyy}**
### Buffer(缓冲区)
#### 为什么用buffer
**在node.ES6之前,前端工程师只需要进行一些简单的字符串或DOM操作就可以满足业务需要,所有对二进制数据比较陌生**
**但node出现之后,前端工程师面对的技术场景发生了变化(PC,移动,后端),可以深入到网络传输.文件操作.图片处理等领域,而这些操作都与二进制有关**
**node里面的buffer,是一个二进制数据的容器,数据结构类型与数组,专门用于node中数据的存放**
#### buffer的基本使用
**历史使用:`const buf1 =new Buffer(10)`,安全隐患,分配到的内存可能还储存着旧数据,这样有安全隐患**
##### 新使用方法: 
**Buffer提供了`Buffer.from``Buffer.alloc``Buffer.allocUnsafe``Buffer.allocUnsafeSlow`四个方法来申请内存**
###### * Buffer.from(str):将一个字符串转换为buffer
###### * Buffer.alloc(size):创建一个指定大小的Buffer
###### * Buffer.allocUnsafe(size):创建一个指定大小的Buffer,但是可能包含敏感信息
## 文件系统
### 基本概念
#### * 在node中,于文件系统的交互是非常重要的,服务器的本质就是将本地的文件发送给远程的客户端
#### * node通过fs模块来和文件系统进行交互,该模块提供了一些标准文件访问API来打开.读取.写入文件,以及与其交互
#### * 要使用fs模块,首先要从核心模块中加载:`const fs = require('fs')`
### 文件操作
#### 打开文件
**r:读取文件,文件不存在则出现异常**
**r+:读写文件,文件不存在则出现异常**
**rs:在同步模式下打开文件用于读取**
**rs+:在同步模式下打开文件用于读写**
**w:打开文件用于写操作,如果不存在则创建,如果存在则截断**
**wx:打开文件用于写操作,如果存在则打开失败**
**w+:打开文件用于读写,如果不存在则创建,如果存在则截断**
**wx+:打开文件用于读写,如果存在则打开失败**
**a: 打开文件用于追加,如果不存在则创建**
**ax:打开文件用于追加,如果路径存在则失败**
**a+:打开文件进行读取和追加,如果不存在则创建该文件**
**ax+:打开文件进行读取和追加,如果路径存在则失败**
## MongoDB数据库
### 非关系型数据库
#### * 没有行.列的概念,用JSON来储存数据,集合就相当于"表",文档相当于"行":标准化和非标准化的摩擦,标准化限制创新,非标准化不能统一;
#### * 特征
**键值(Key-Value)存储数据库**
**列存储数据库**
**文档型数据库**
**图形数据库**
#### * 典型的数据库:`MongoDB``CouchDB``HBase``Redis`...
### 关系性和非关系型区别
#### 关系型数据库比较结构化,操作不是很灵活,非关系型数据库操作灵活,但不适合大型数据存储,比较适合微架构...(两者可以互相辅助)
## 安装MongoDB
### 下载MongoDB:`https://www.mongodb.org/dl/win32/`
#### * MongoDB的版本偶数版本为稳定版,奇数版本为开发版
#### * MongoDB对于32为系统支持不佳,所有3.2版本以后没有再对32位系统支持
### 步骤
#### * 直接下载安装
#### * 电脑服务安装`sc.exe create MongoDB binPath="\"C:\Program Files\MongoDB\Server\4.3\bin\mongod.exe\" --service --config=\"C:\Program Files\MongoDB\Server\4.3\mongod.cfg\"" DisplayName="MongoDB" start="auto"`
## MongoDB组成
### * 数据库:数据库是一个仓库
### * 集合:集合类似于数组,在集合中可以存放文档
### * 文档:文档数据库中的最小单位,我们存储和操作的内容都是文档
### 操作步骤
**`mongon`:查看数据库信息**
**`mongo`:链接数据库,默认端口:127.0.0.1:27017**
**`show dbs`:查看集合**
**`use 集合名`:有这个集合就进入集合,没有则创建集合**
**`show collections`:查看集合下面的文档**
**`db`:显示自己当前在哪个集合中**
#### * 插入一个数据(没有文档名称则创建一个文档)
```
db.student(文档名称).insert({id:'001',name:'xuan',age:18,sex:'nan'})`
```
#### * 查看数据
```
db.student.find();
```
#### * 插入多条数据
```
db.student.insert([
    {id:'001',name:'璇',age:18,sex:'男'},
    {id:'001',name:'璇1',age:18,sex:'男'},
    {id:'001',name:'璇2',age:18,sex:'女'},
    {id:'001',name:'璇3',age:18,sex:'男',friend: '朱'},
    {id:'001',name:'璇4',age:18,sex:'男'},
    {id:'001',name:'璇5',age:18,sex:'男'}
])
```
#### * 查询指定数据
```
db.student.find({"id":"001"})
```
```
db.student.find({age:18,sex:"nan"})
```
#### * 查询符合条件的一条记录
```
db.student.findOne({"id":"001"})
```
#### * 查询符合条件的记录的数量
```
db.student.find({age:18,sex:'男'}).length()
```
#### * 修改数据
```
db.student.update({"name": "璇",{$set:{name:"哈哈哈",age:20}}})
```
#### * 新增数据
```
db.student.update({"name": "璇",{$set:{hobby:"唱歌"}}})
```
#### * 删除数据
```
db.student.update({"name": "璇",{$unset:{age:1}}})
```
#### * 修改多条数据
```
db.student.updateMany({"sex":"男"},{$set:{hobby:"学习"}})
```



