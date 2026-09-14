const mongoose = require("mongoose")
let userSChema = mongoose.Schema({
    name:String,
    email:String,
    age:Number,
})
let userModel = mongoose.model('user',userSChema)
module.exports=userModel