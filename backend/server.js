const express = require('express')

const products = require('./data/products')
const dotenv = require('dotenv')

dotenv.config()
const app = express();
app.get('/api',(req,res)=>{
    res.send('api is ')
})
app.get('/api/products',(req,res)=>{
    res.json(products)
})
app.get('/api/products/:id',(req,res)=>{
    const product = products.find(p=> p._id===req.params.id)
    res.json(product)
})
let port = process.env.PORT || 4000
app.listen(port,()=>{
    console.log(`Server running in ${process.env.NODE_ENV} on port ${port}`)
})