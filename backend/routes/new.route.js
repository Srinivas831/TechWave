// const express=require("express");
// const { AddToCartModel } = require("../model/addToCart.model");
// const coursRouter=express.Router();

// coursRouter.get("/getfromcart",async(req,res)=>{
//     try{
//         let userId=req.query.userId;
//         console.log("obj",userId);
//         let getFromCart=await AddToCartModel.find({userId});
//         console.log("iddd",getFromCart);
//         if(getFromCart.length==0){
//             return res.status(200).send({"message":"No items present"});
//         }
//         else{
//             res.status(200).send({"message":"got from cart",data:getFromCart});
//         }
//     }
//     catch(err){
//         res.status(400).send({message:err.message})
//     }
// })
// module.exports={coursRouter};