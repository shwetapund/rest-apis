import Bus from "../models/Bus.js"

const postApiBus = async (req,res)=>{
    const {busName, busNumber, totalSeats, availableSeats, bookSeats} = req.body;

    try{
        const busObj = new Bus({
            busName,
            busNumber,
            totalSeats, 
            availableSeats, 
            bookSeats
        })
        const savedBus = await busObj.save();
        
        res.status(201).json({
            success:true,
            data:savedBus,
            message:"successfully saved bus"
        })
    }
    catch(err){
        res.json({
            success:false,
            message:err.message
        })
    }

}

const getApiBus = async (req,res)=>{
    const findBuses = await Bus.find();

    res.json({
        success: true,
        data:findBuses,
        message:'successfully fetch all buses'
    })
}

const putApiBus = async (req,res)=>{
    const {id} = req.params;

    const finddata = await Bus.findOne({_id:id});
    res.json({
        success:true,
        data:finddata,
        message:"successfully fetch one bus"
    })
}
export {postApiBus, getApiBus, putApiBus} ;



























