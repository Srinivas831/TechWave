const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const blacklistUserSchema = mongoose.Schema({
    logoutToken : String
},{
    versionKey:false
})

const BlacklistUserModel = mongoose.model("blacklistUserToken", blacklistUserSchema);

module.exports = {BlacklistUserModel};