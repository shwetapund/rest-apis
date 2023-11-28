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

    res.status(200).json({
        success: true,
        data:findBuses,
        message:'successfully fetch all buses'
    })
}

const getApiBusById = async (req,res)=>{
    const {id} = req.params;

    const finddata = await Bus.findOne({_id:id});
    res.status(200).json({
        success:true,
        data:finddata,
        message:"successfully fetch one bus"
    })
} 

const putApiBus = async(req,res)=>{
    const { _id } = req.params;

   const { busName, busNumber, totalSeats, availableSeats, bookSeats} = req.body;

   await Bus.updateOne({_id:_id}, {$set:{busName, busNumber, totalSeats, availableSeats, bookSeats}})

   const updateBus = await Bus.findById(_id);

   return res.status(200).json({
    success:true,
    message:"successfully update"
   })
}

const patchApiBus = async (req,res)=>{
  try{
    const {_id} = req.params;  
    const {busNumber} = req.body;
    await Bus.updateOne({_id:_id}, {$set:{busNumber:busNumber}});

    res.status(200).json({
        success:true,
        message:"successfully update"
    })
  }
  catch(err){
    return res.json({
        success:false,
        message:err.message
    })
  }
}

export {postApiBus, getApiBus, getApiBusById, patchApiBus,putApiBus} ;
























