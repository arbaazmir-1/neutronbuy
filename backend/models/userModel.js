const mongoose = require("mongoose")
const {Schema} = mongoose

const userSchema = Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    isAdmin:{
        type: Boolean,
        required: true,
        default: false,
    },
    password:{
        type: String,
        required: true
    },
    address: [
        {
            type:String
        }
    ]

},{
    timestamps: true
})
const User = mongoose.model("User",userSchema);
module.exports = User