const express = require("express")
const connection = require("./config/connection")
const app=express()
const usermodel=require("./models/usermodel")
const userroutes=require("./routes/userroutes")
const productroutes=require("./routes/productroutes")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>
{
    res.send("use/user for users")
})
// app.use("/user",userroutes)
app.use("/products",productroutes)

app.listen(8080,()=>console.log("server running on localhost:8080"))