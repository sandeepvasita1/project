const studentModel = require("../models/studentmodel")
const studentmodel=require("../models/studentmodel")
exports.showstudents=async()=>
{
   let allstudents =await studentModel.find()
   return allstudents
}
exports.addstudent=async(student)=>
{
    let Newstudent = new studentModel(student)
    console.log(await Newstudent.save())
    return{"msg":"success","data":studentmodel.students}
}
exports.deletestudent=async (name)=>
{
   data={}
   await studentModel.findOneAndDelete({name:name})
   .then(async (e)=>{
      if(e==null){
         data={"msg":"no record found",data:await this.showstudents()}
      }
      else{
         data={msg:"Record Deleted",data:await this.showstudents()}}
      })
      .catch(async(err)=>
      {
         data={msg:"exception occors",data:await this.showstudents()}
      })
      return data
   
}
   exports.updatestudent=async(rollno,student)=>
{
   data={mag:"update case"}
   await studentModel.findOneAndUpdate({rollno:rollno},student)
   .then(async(e)=>
   {
      if(e==null){
         data={msg:"rollno is not found",data:await this.showstudents()}
      }
      else{
         data={msg:"record update",data:await this.showstudents()}
      }
   })
   .catch(async(err)=>
   {console.log(err)
      data={mag:"err",data:await this.showstudents()}
   })
    return data
}


