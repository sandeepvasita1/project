const mongoose = require("mongoose")
let productSChema = mongoose.Schema({
    name:String,
    category:String,
    price:Number,
    stock:Number,
    brand:String,
    rating:Number
})
let productModel = mongoose.model('product',productSChema)
module.exports=productModel