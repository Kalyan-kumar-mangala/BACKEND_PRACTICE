import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    experienceyears: {
        type: Number,
        default: 0,
        required: true
    },
    workedInhospitals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital'
    }],
    phone: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },

},{timestamps:true});

export const Doctor = mongoose.model('Doctor', doctorSchema);