const jtw = require('jsonwebtoken')

const generateToken= (id)=>{
    return jtw.sign({id},process.env.JTW_SECRET,{
        expiresIn: '30d'
    })
}
module.exports = generateToken