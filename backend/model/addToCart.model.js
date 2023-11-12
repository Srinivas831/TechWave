const mongoose=require("mongoose");
mongoose.set('strictQuery', true);
const addToCartSchema=mongoose.Schema({
    image:String,
    title:String,
    instructor:String,
    rating:Number,
    fullvideo:String,
    original_price:Number,
    discounted_price:Number,
    hours:Number,
    userId:String,
    productId:String
},{
    versionKey:false
})

const AddToCartModel=mongoose.model("cartItems",addToCartSchema);

module.exports={AddToCartModel};