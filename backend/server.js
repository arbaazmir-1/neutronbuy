const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db.js')
const productsRoutes = require('./routes/productsRoutes.js')
const {notFound,errorHandler } = require('./middleware/errorMiddleware')
const asyncHandler = require('express-async-handler')
const Product = require('./models/productModel.js')

dotenv.config()
connectDB()
const app = express();


app.get('/api',(req,res)=>{
    res.send('api is working')
})

app.use('/api/products',productsRoutes)


app.get('/api/promotions',asyncHandler(async(req,res)=>{
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
}))



app.use(notFound)
app.use(errorHandler)
let port = process.env.PORT || 4000 
app.listen(port,()=>{
    console.log(`Server running in ${process.env.NODE_ENV} on port ${port}`)
})