const mongoose=require("mongoose");

const purchasedSchemaa=mongoose.Schema({
    userId:String,
    productId:Array
},{
    versionKey:false
})

const PurchasedModel=mongoose.model("purchasedcourse",purchasedSchemaa);

module.exports={PurchasedModel};