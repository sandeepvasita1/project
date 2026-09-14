const express = require("express")
const app=express()
const bookroutes = require("./routes/bookroutes")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>
{
    res.send("book/book for books")
})
app.use("/book",bookroutes)
app.listen(8080,()=>console.log("server running on localhost:8080"))