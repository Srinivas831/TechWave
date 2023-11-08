const mongoose=require("mongoose");

const productSchema=mongoose.Schema({
    image:{
        type:String,
        require:true
    },
    title:{
        type:String,
        reuired:true
    },
    description:{
        type:String,
        reuired:true
    },
    instructor:{
        type:String,
        reuired:true
    },
    original_price:{
        type:Number,
        require:true
    },
    discounted_price:{
        type:Number,
        require:true
    },
    rating:{
        type:Number,
        require:true
    },
    category:{
        type:String,
        required:true
    },
    students:{
        type:Number,
        require:true
    },
    hours:{
        type:Number,
        require:true
    },
    demovideo:{
        type:String,
        require :true
    },
    fullvideo:{
        type:String,
        require:true
    },
    language:{
        type:String,
        require:true
    },
    learnings:{
        type:Array,
        require:true
    },
    course_includes:{
        type:Array,
        require:true
    },
    requirements:{
        type:Array
    }
},{
    versionKey:false
})

const ProductModel=mongoose.model("allcourse",productSchema);

module.exports={ProductModel};