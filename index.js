import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import {postApiBus, getApiBus, putApiBus} from "./controllers/Buses-controller.js"

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

app.post('/api/buses',postApiBus)
app.get('/api/buses',getApiBus)
app.get('/api/buses/:id',putApiBus)


app.listen(PORT, (req,res)=>{
    console.log(`server is running on ${PORT}`)
})
