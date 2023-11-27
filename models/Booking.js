import { Schema, model } from "mongoose";

const busSchema = new Schema({
    busName: {
        type:String,
        required:true
    },
    busNumber:{
        type:Number,
        required:true,
        unique:true
    },
    totalSeats:{
        type:Number,
        required:true
    },
    availableSeats:{
        type:Number,
        required:true
    },
    bookSeats:{
        type:Number,
        required:true
    },
},
{
    timestamps: true
})

const bus = model('bus',busSchema)

export default bus