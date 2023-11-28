import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import {postApiBus, getApiBus, getApiBusById, putApiBus,patchApiBus} from "./controllers/Buses-controller.js"
import {postApiBooking, getApiBooking, putApiBooking} from "./controllers/Booking-controller.js";

const app = express();
app.use(express.json());

//connection MongoDb

const MongoDBConn = async ()=>{
    const conn = await mongoose.connect(process.env.MONGODB_URL)
    if(conn){
        console.log('mongoDB is connected 💖')
    }
}
MongoDBConn();

const PORT = process.env.PORT || 5000;
 
//apis for bus

app.post('/api/v1/buses',postApiBus)
app.get('/api/v1/buses',getApiBus)
app.get('/api/v1/buses/:id',getApiBusById)
app.put('/api/v1/buses/:_id',putApiBus)
app.patch('/api/v1/buses/:_id',patchApiBus)

//apis for booking
app.post('/api/v1/bookings',postApiBooking)
app.get('/api/v1/bookings',getApiBooking)
app.put('/api/v1/bookings/:id',putApiBooking)

app.listen(PORT, (req,res)=>{
    console.log(`server is running on ${PORT}`)
})
