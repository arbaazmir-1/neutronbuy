const mongoose = require("mongoose")
const {Schema} = mongoose

const reviewSchema = Schema({
    name: {
        type: String,
        required:true,
    },
    rating: {
        type:Number,
        required: true,
        default: 0
    },
    comment: {
        type:String,
        required: true,
        
    },
},{timestamps:true})

const productSchema = Schema({

    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true,
        
    },
    brand:{
        type: String,
        required: true,
        
    },
    category:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    rating: [reviewSchema],
    rating: {
        type:Number,
        required: true,
        default: 0
    },
    numReviews: {
        type:Number,
        required: true,
        default: 0
    },
    price: {
        type:Number,
        required: true,
        default: 0
    },
    countInStock: {
        type:Number,
        required: true,
        default: 0
    },


},{
    timestamps: true
})
const Product = mongoose.model("Product",productSchema);
module.exports = Product