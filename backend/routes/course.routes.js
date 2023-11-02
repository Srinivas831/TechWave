const express=require("express");
const { ProductModel } = require("../model/courses.model");
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

module.exports={productRouter};