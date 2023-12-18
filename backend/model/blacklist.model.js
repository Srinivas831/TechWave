const mongoose=require("mongoose");
const blacklistSchema=mongoose.Schema({
    blockEmail : String
},{
    versionKey:false
})

const BlackListModel=mongoose.model("blacklist",blacklistSchema);

module.exports={BlackListModel};