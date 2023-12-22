const mongoose=require("mongoose");
const blocklistSchema=mongoose.Schema({
    blockEmail : String
},{
    versionKey:false
})

const BlockListModel=mongoose.model("blocklist",blocklistSchema);

module.exports={BlockListModel};