const express=require("express");
const { ProductModel } = require("../model/courses.model");
const { AddToCartModel } = require("../model/addToCart.model");
const { PurchasedModel } = require("../model/purchased.model");
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

        const courses = await ProductModel.find(query).sort(sortQuery).skip(skip).limit(limitNumber);
        const totalCourses = await ProductModel.countDocuments(query);
        const totalPages = Math.ceil(totalCourses / limitNumber);
        res.status(200).send({ courses, totalPages, currentPage: pageNumber });
    } catch (err) {
        console.log(err);
        res.status(400).send({ error: err.message });
    }
});

productRouter.get("/getpurchase", async (req, res) => {
    const productId=req.query.productId;
    try {
        const product = await ProductModel.find({_id:productId});
    res.status(200).send({"msg":"got last",product});
    } catch (error) {
        res.send({"error":error})
    }
});

productRouter.get("/getfrompurchased",async(req,res)=>{
    let userId=req.query.userId;
    try{
        const userData = await PurchasedModel.findOne({ userId });
        if (userData) {
          const productIdArray = userData.productId;
          res.status(200).send(productIdArray);
        }
         else {
          res.status(200).send([]); // Return an empty array if no data is found
        }
    }
    catch(err){
        res.status(400).send(err);
    }
})



productRouter.get("/:id",async(req,res)=>{
    const id=req.params.id;
try{
    const findTheCourse=await ProductModel.findOne({_id:id});
    res.status(200).send({"message":"Got the product","course":findTheCourse});
}
catch(err){
res.status(400).send({"message":err.message});
}
})



productRouter.post("/addCourses", async (req, res) => {
    const payload = req.body;
    try {
      const new_product = new ProductModel(payload);
      await new_product.save();
      res.send({ msg: "Product created successfully" });
    } catch (err) {
      res.send(400).json({ msg: "Something went wrong" });
    }
});

productRouter.put("/update/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const updatedData = req.body;
      const options = { new: true };
  
      const result = await ProductModel.findByIdAndUpdate(
        id,
        updatedData,
        options
      );
      res.send(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
});

productRouter.delete("/delete/:id", async (req, res) => {
    const productID = req.params.id;
    try {
      await ProductModel.findByIdAndDelete({ _id: productID });
      res.send({ msg: "Product deleted successfully" });
    } catch (err) {
      res.send(400).send({ msg: "Something Went Wrong" });
    }
});

productRouter.post("/addtocart",async(req,res)=>{
    try{
        let obj=req.body;
        // console.log(obj);
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
        console.log("obj",userId);
        let getFromCart=await AddToCartModel.find({userId});
        console.log("iddd",getFromCart);
        if(getFromCart.length==0){
            return res.status(200).send({"message":"No items present"});
        }
        else{
            res.status(200).send({"message":"got from cart",data:getFromCart});
        }
    }
    catch(err){
        res.status(400).send({message:"error getting"})
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

productRouter.post("/addtopurchased",async(req,res)=>{
    const {userId,productId}=req.body;
    try{
        // const purchased=new PurchasedModel({userId,productId});
        // await purchased.save();
        // res.status(200).send({"message":"purchased successfully"});

        // Search for an existing document with the same userId
        const existingPurchase = await PurchasedModel.findOne({ userId });

        if (existingPurchase) {
            // If a document already exists for this user, add the new productId to the array
            existingPurchase.productId.push(productId);
            await existingPurchase.save();
            res.status(200).send({ message: "Product added to purchased successfully" });
        } else {
            // If no document exists for this user, create a new one
            const purchased = new PurchasedModel({ userId, productId:[productId] });
            await purchased.save();
            res.status(200).send({ message: "Product added to purchased successfully" });
        }
    }
    catch(err){
        res.status(400).send({"message":"error adding to purchased"})
    }
})



module.exports={productRouter};