import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    orderitems:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product',
            required:true
        }
    ],
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['pending','cancelled','shipped','delivered'],
        default:'pending'
    }
},{timestamps:true});

export const order = mongoose.model('order', orderSchema);