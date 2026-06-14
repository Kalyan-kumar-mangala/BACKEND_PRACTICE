import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
 },
address: {
    type: String,
    required: true 
},
hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital',},
diagnosedwith: {
    type: String,
    required: true},
bloodgroup: {
    type: String,
    required: true},

},{timestamps:true});

export const Patient = mongoose.model('Patient', patientSchema);