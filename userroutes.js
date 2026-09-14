const express = require("express")
const usercontroller=require("../controllers/usercontroller")
const router = express.Router()
router.get("/",async(req,res)=>
{
    let data= await usercontroller.showusers()
    res.send(data)
})
router.post("/",async(req,res)=>
{
    let user ={"name":req.body.name,
        email:req.body.email,
        age:parseInt(req.body.age)}
    
    let data = await usercontroller.adduser(user)
    res.json(data)
})
router.delete("/",async(req,res)=>
{
    let name=req.body.name
    let data = await usercontroller.deleteuser(name)
    res.json(data)
})
router.put("/",async(req,res)=>
{
    let user={"name":req.body.name,
        email:req.body.email,
        age:parseInt(req.body.age)}
        let data = await usercontroller.updateUser(req.body.email,user)
        res.json(data)
})


module.exports=router