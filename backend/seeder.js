const mongoose = require('mongoose')
const dotenv = require("dotenv")
const users = require('./data/users')
const products = require('./data/products')
const User = require('./models/userModel')
const Product = require('./models/productModel')
const Order = require('./models/orderModel')
const connectDB = require('./config/db')

dotenv.config()

connectDB()
const importData = async()=>{
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        
        await User.insertMany(users)
        await Product.insertMany(products)
        
        console.log("Data imported!")
        process.exit()

    }catch(e){
        console.log(e)
        process.exit(1)
    }
}
const destroyData = async()=>{
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()
        
        
        console.log("Data Deleted!")
        process.exit()

    }catch(e){
        console.log(e)
        process.exit(1)
    }
}
if(process.argv[2]==="-d") {
    destroyData()
}else{
    importData()
}