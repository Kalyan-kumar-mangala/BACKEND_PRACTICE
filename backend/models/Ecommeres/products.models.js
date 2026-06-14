import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    owner: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    stock: {
        type: Number,
        default: 0,
        
    },
    availability:{
        type : boolean,
        default : false,
        
    }
    
},{timestamps:true});

export const Product = mongoose.model('Product', productSchema);
