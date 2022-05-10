const jtw = require('jsonwebtoken')
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')

const protect=  asyncHandler( async(req,res,next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(" ")[1]
            const decoded = jtw.verify(token,process.env.JTW_SECRET)
            req.user = await User.findById(decoded.id).select('-password')
            
            next()
        }catch(e){
            console.error(e)
            res.status(401)
            throw new Error('Unauthorized, Token Verification Failed!')
        }
    }
    if(!token){
        res.status(401)
        throw new Error("Unauthorized Access")
    }
    
})
module.exports = {protect}