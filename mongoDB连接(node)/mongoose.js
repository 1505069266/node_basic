
const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/27017', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const Schema = mongoose.Schema
// const ObjectId = Schema.ObjectId

// const people = new Schema({
//     id: ObjectId,
//     name: String,
//     age: Number,
//     height: String,
//     date: Date
// })

// let People = mongoose.model("People", people)

url = "mongodb://localhost:27017/"

mongoose.connect(url)

mongoose.connection.on('connected', ()=>{
    console.log('连接成功');
})

mongoose.connection.on('error', ()=>{
    console.log('连接断开');
})

mongoose.connection.on('disconnected', ()=>{
    console.log('mongoose connection disconnected');
})