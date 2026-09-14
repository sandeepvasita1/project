const express = require("express")
const productcontroller=require("../controllers/productcontroller")
const router = express.Router()
router.get("/",async(req,res)=>
{
    let data= await productcontroller.showproducts()
    res.send(data)
})
router.post("/",async(req,res)=>
{
    let product ={"name":req.body.name,
        category:req.body.category,
        price:parseInt(req.body.price),
        stock:parseInt(req.body.stock),
        brand:req.body.brand,
        rating:parseInt(req.body.rating)

        
    }
    
    let data = await productcontroller.addproduct(product)
    res.json(data)
})
router.delete("/",async(req,res)=>
{
    let name=req.body.name
    let data = await productcontroller.deleteproduct(name)
    res.json(data)
})
router.put("/:id", async(req, res) =>
{
    let id = req.params.id

    let product = {
        name: req.body.name,
        category: req.body.category,
        price: parseInt(req.body.price),
        stock: parseInt(req.body.stock),
        brand: req.body.brand,
        rating: parseInt(req.body.rating)
    }

    let data = await productcontroller.updateproduct(id, product)

    res.json(data)
})


module.exports=router