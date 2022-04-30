const mongoose = require("mongoose")
const {Schema} = mongoose

const orderSchema = Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    orderItems:[{
        name:{type:String,required:true},
        quantity:{type:Number,required:true},
        image:{type:String,required:true},
        price:{type:Number,required:true},
        product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Products"
        },


    }],
    shippingAddress:{
        address:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        },
        postalCode:{
            type:String,
            required:true
        },
        Country:{
            type:String,
            required:true
        }
    },
    paymentMethod:{
        type: String,
        required: true,
        
    },
    paymentResult:{
        id:{type:String},
        status:{type:String},
        update_time:{type:String},
        email_address:{type:String},

    },
    taxPrice:{
        type: Number,
        required: true,
        default: 0
    },
    shippingPrice:{
        type: Number,
        required: true,
        default: 0
    },
    totalPrice:{
        type: Number,
        required: true,
        default: 0
    },
    isPaid:{
        type: Boolean,
        required: true,
        default: 0
    },
    paidAt:{
        type:Date
    },
    isDelivered:{
        type:Boolean,
        required:true,
        default:false,

    },
    deliveredAt:{
        type:Date
    },
    
    

},{
    timestamps: true
})
const Order = mongoose.model("Order",orderSchema);
module.exports = Order