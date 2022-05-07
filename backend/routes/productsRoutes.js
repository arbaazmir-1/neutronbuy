const express = require('express')
const router = express.Router();
const Product = require('../models/productModel.js')
const asyncHandler = require('express-async-handler')



router.get('/',asyncHandler( async (req,res)=>{
    const products = await Product.find();
    // res.status(401)
    // throw new Error('Unathorzied Personal')
    res.json(products)
}))

router.get('/:id',asyncHandler( async(req,res)=>{
    const product = await Product.findById(req.params.id)
    if(product){
        res.json(product)
    }
    else{
        res.status(404)
        throw new Error('Product Not Found')
    }
    
}))

module.exports = router