import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    }
});

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Address',
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    numberOfDoctors: {
        type: Number,
        required: true
    },
    
},{timestamps:true});

export const Hospital = mongoose.model('Hospital', hospitalSchema); 