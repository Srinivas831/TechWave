const express=require("express");
const { ProductModel } = require("../model/courses.model");
const { AddToCartModel } = require("../model/addToCart.model");
const productRouter=express.Router();


productRouter.get("/", async (req, res) => {
    try {
        const { search, sort, filters, page, limit } = req.query;
        console.log(search, sort, filters, page, limit);
        
        const query = {};
        if (search) {
            query.$or = [{ title: { $regex: search, $options: "i" } }, { category: { $regex: search, $options: "i" } }];
        }
        if (filters && filters.length > 0) {
            query.category = { $in: filters };
        }
        
        let sortQuery = {};
        if (sort === "asc") {
            sortQuery = { discounted_price: 1 };
        } else if (sort === "desc") {
            sortQuery = { discounted_price: -1 };
        }
        const pageNumber = parseInt(page) || 1;
        const limitNumber = parseInt(limit) || 10;
        const skip = (pageNumber - 1) * limitNumber;

        console.log(query,sortQuery)

        const courses = await CourseModel.find(query).sort(sortQuery).skip(skip).limit(limitNumber);
        const totalCourses = await CourseModel.countDocuments(query);
        const totalPages = Math.ceil(totalCourses / limitNumber);
        res.status(200).send({ courses, totalPages, currentPage: pageNumber });
    } catch (err) {
        console.log(err);
        res.status(400).send({ error: err.message });
    }
});


productRouter.get("/:id",async(req,res)=>{
    const id=req.params.id;
try{
    const findTheCourse=await ProductModel.findOne({_id:id});
    res.status(200).send({"message":"Got the product","course":findTheCourse});
}
catch(err){
res.status(400).send({"message":"error getting the course"});
}
})

productRouter.post("/addtocart",async(req,res)=>{
    try{
        let obj=req.body;
        console.log(obj);
        const findIfAlreadyPresnetInCart=await AddToCartModel.find({
            productId:obj.productId,
            userId:obj.userId
        });
        // console.log("Found in cartt:",findIfAlreadyPresnetInCart);
        if (findIfAlreadyPresnetInCart.length>0){
            return res.status(200).send({"message":"Already in cart"});
        }
        const addedTocart=new AddToCartModel(obj);
        addedTocart.save();
        res.status(200).send({"message":"Added to cart"});
    }
    catch(err){
        res.status(400).send({"message":"error adding to cart"});
    }
})


productRouter.get("/getfromcart",async(req,res)=>{
    try{
        let userId=req.query.userId;
        // console.log("obj",obj)
        let getFromCart=await AddToCartModel.find({userId});
        // console.log("iddd",getFromCart);
        if(getFromCart.length==0){
            return res.status(200).send({"message":"No items present"});
        }
        else{
            res.status(200).send({"message":"got from cart",data:getFromCart});
        }
    }
    catch(err){
        res.status(400).send({message:"error getting from cart"})
    }
})

productRouter.delete("/deletefromcart",async(req,res)=>{
    const userId=req.query.userId;
    const productId=req.query.productId;
    try{
        await AddToCartModel.findOneAndDelete({userId,productId});
        res.status(200).send({"message":"removed from cart"});
    }
    catch(err){
        res.status(400).send({"message":"cerror deleting from cart"});
    }
})

module.exports={productRouter};