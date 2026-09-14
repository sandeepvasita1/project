const mongoose = require("mongoose")
let studentSChema = mongoose.Schema({
    name:String,
    rollno:Number,
    age:Number,
})
let studentModel = mongoose.model('student',studentSChema)
module.exports=studentModel