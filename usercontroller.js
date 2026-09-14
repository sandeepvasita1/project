const userModel = require("../models/usermodel")
const usermodel=require("../models/usermodel")
exports.showusers=async()=>
{
   let allusers =await userModel.find()
   return allusers
}
exports.adduser=async(user)=>
{
    let Newuser = new userModel(user)
    console.log(await Newuser.save())
    return{"msg":"success","data":usermodel.users}
}
exports.deleteuser=async (name)=>
{
   data={}
   await userModel.findOneAndDelete({name:name})
   .then(async (e)=>{
      if(e==null){
         data={"msg":"no record found",data:await this.showusers()}
      }
      else{
         data={msg:"Record Deleted",data:await this.showusers()}}
      })
      .catch(async(err)=>
      {
         data={msg:"exception occors",data:await this.showusers()}
      })
      return data
   
}
   exports.updateUser=async(email,user)=>
{
   data={mag:"update case"}
   await userModel.findOneAndUpdate({email:email},user)
   .then(async(e)=>
   {
      if(e==null){
         data={msg:"email not found",data:await this.showusers()}
      }
      else{
         data={msg:"record update",data:await this.showusers()}
      }
   })
   .catch(async(err)=>
   {console.log(err)
      data={mag:"err",data:await this.showusers()}
   })
    return data
}


