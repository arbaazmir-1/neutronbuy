const Product = require('../models/productModel.js')
const asyncHandler = require('express-async-handler')

const getPromotionProducts =asyncHandler(async(req,res)=>{
    const products = await Product.find({
        "promotions.isOnSale" : true
    })
    if(products){
    res.json(products)
    }
    else{
        res.status(404)
        throw new Error('Product Not Found')
    }
})
module.exports = {getPromotionProducts}