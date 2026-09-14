const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/projectdb")
.then(()=>console.log("db connect"))
.catch(()=>console.log("error : db not connect"))