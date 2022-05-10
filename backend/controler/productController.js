const Product = require('../models/productModel.js')
const asyncHandler = require('express-async-handler')

const getProducts = asyncHandler( async(req,res) => {
    const products = await Product.find();
    // res.status(401)
    // throw new Error('Unathorzied Personal')
    res.json(products)
})
const getByIDProducts = asyncHandler( async(req,res) => {
    const product = await Product.findById(req.params.id)
    if(product){
        res.json(product)
    }
    else{
        res.status(404)
        throw new Error('Product Not Found')
    }
})
module.exports= {getProducts,getByIDProducts}