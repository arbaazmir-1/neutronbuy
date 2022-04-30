const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db.js')
const productsRoutes = require('./routes/productsRoutes.js')
const {notFound,errorHandler } = require('./middleware/errorMiddleware')
dotenv.config()
connectDB()
const app = express();


app.get('/api',(req,res)=>{
    res.send('api is working')
})

app.use(notFound)
app.use(errorHandler)
app.use('/api/products',productsRoutes)





let port = process.env.PORT || 4000 
app.listen(port,()=>{
    console.log(`Server running in ${process.env.NODE_ENV} on port ${port}`)
})