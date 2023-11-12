const mongoose=require("mongoose");
mongoose.set('strictQuery', true);

const userSchema=mongoose.Schema({
    userName:String,
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

const UserModel=mongoose.model("registeredUsers",userSchema);
module.exports={UserModel};