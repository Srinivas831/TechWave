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


productRouter.get("/", async (req, res) => {
    try {
        const product = await ProductModel.find();
    res.send(product);
    } catch (error) {
        res.send({"error":error})
    }
});

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