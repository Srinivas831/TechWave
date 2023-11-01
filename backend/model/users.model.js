const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    userName:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
},{
    versionKey:false
})

const UserModel=mongoose.model("userDetailWhileRegister",userSchema);
module.exports={UserModel};