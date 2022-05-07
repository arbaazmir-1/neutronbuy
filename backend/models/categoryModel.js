const mongoose = require('mongoose')
const {Schema} = mongoose;

const categorySchema = Schema({
    name: {
        type:String,
        required:true
    },
    products: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product"
        }
    ],

},{
    timeStamps:true
})
const Category = mongoose.model("Category",categorySchema);
module.exports=Category