const express = require("express")
const studentcontroller=require("../controllers/studentcontroller")
const router = express.Router()
router.get("/",async(req,res)=>
{
    let data= await studentcontroller.showstudents()
    res.send(data)
})
router.post("/",async(req,res)=>
{
    let student ={"name":req.body.name,
        rollno:parseInt(req.body.rollno),
        age:parseInt(req.body.age)}
    
    let data = await studentcontroller.addstudent(student)
    res.json(data)
})
router.delete("/",async(req,res)=>
{
    let name=req.body.name
    let data = await studentcontroller.deletestudent(name)
    res.json(data)
})
// router.put("/",async(req,res)=>
// {
//     let user={"name":req.body.name,
//         rollno:parseInt(req.body.rollno),
//         age:parseInt(req.body.age)}
//         let data = await studentcontroller.updatestudent(req.body.rollno,user)
//         res.json(data)
// })


module.exports=router