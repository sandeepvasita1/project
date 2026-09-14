const express = require("express")
const connection = require("./config/connection")
const app=express()
const studentmodel=require("./models/studentmodel")
const studentroutes=require("./routes/studentroutes")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>
{
    res.send("use/student for students")
})
app.use("/student",studentroutes)

app.listen(8080,()=>console.log("server running on localhost:8080"))