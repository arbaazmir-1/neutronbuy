const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true, useUnifiedTopology: true
        }) 
        console.log(`DATABASE UP AND Running: ${conn.connection.host}`)
    }catch(e){
        console.log(`Error : ${e.message}`)
        process.exit( 1)
    }
}
module.exports = connectDB