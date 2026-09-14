const express = require("express")
const bookcontroller=require("../controllers/bookcontroller")
const router = express.Router()
router.get("/",(req,res)=>
{
    let data= bookcontroller.showbooks()
    res.send(data)
})
router.post("/",(req,res)=>
{
    let book ={"name":req.body.name}
    let data = bookcontroller.addbook(book)
    res.json(data)
})
module.exports=router