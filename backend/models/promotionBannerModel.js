const mongoose = require('mongoose');
const {Schema} = mongoose;

const promotionBannerSchema = Schema({
    image:{
        type:String,
        required:true,
    },
    link:{
        type:String,
        required:true
    }
})
const PromotionBanner = mongoose.model("PromotionBanner",promotionBannerSchema);
module.exports = PromotionBanner;