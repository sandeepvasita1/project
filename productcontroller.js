const productModel = require("../models/productmodel")



exports.showproducts=async()=>
{
   let allproducts =await productModel.find()
   return allproducts
}
exports.addproduct=async(product)=>
{
    let Newproduct = new productModel(product)
    console.log(await Newproduct.save())
    return{"msg":"success","data":productModel.products}
}
exports.deleteproduct=async (name)=>
{
   data={}
   await productModel.findOneAndDelete({name:name})
   .then(async (e)=>{
      if(e==null){
         data={"msg":"no record found",data:await this.showproducts()}
      }
      else{
         data={msg:"Record Deleted",data:await this.showproducts()}}
      })
      .catch(async(err)=>
      {
         data={msg:"exception occors",data:await this.showproducts()}
      })
      return data
   
}
   exports.updateproduct=async(id,product)=>
{
   data={msg:"update case"}
   await productModel.findOneAndUpdate({_id:id},product)
   .then(async(e)=>
   {
      if(e==null){
         data={msg:"id is not found",data:await this.showproducts()}
      }
      else{
         data={msg:"record update",data:await this.showproducts()}
      }
   })
   .catch(async(err)=>
   {console.log(err)
      data={mag:"err",data:await this.showproducts()}
   })
    return data
}


