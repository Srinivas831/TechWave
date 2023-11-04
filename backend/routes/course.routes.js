const express=require("express");
const { ProductModel } = require("../model/courses.model");
const { AddToCartModel } = require("../model/addToCart.model");
const productRouter=express.Router();

productRouter.get("/getsinglecourse/:id",async(req,res)=>{
    const id=req.params.id;
try{
    const findTheCourse=await ProductModel.findOne({_id:id});
    res.status(200).send({"message":"Got the product","course":findTheCourse});
}
catch(err){
res.status(400).send({"message":"error getting the course","course":"error getting the course"});
}
})

productRouter.post("/addtocart",async(req,res)=>{
    try{
        let obj=req.body;
        console.log(obj);
        const findIfAlreadyPresnetInCart=await AddToCartModel.find();
        if (findIfAlreadyPresnetInCart){
            return res.status(200).send({"message":"Already in cart"});
        }
        const addedTocart=new AddToCartModel()
        res.status(200).send("aa")
    }
    catch(err){
        res.status(400).send({"message":"error adding to cart"});
    }
})

module.exports={productRouter};