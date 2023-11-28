import Booking from "./../models/Booking.js"

const postApiBooking = async (req,res)=>{
    try{
    const {bus, passangerName, mobileNumber,seatNumber, to, from} = req.body;

    const bookingObj = new Booking({
        bus, 
        passangerName,
        mobileNumber,
        seatNumber, 
        to, 
        from
    })
    const savedBooking = await bookingObj.save();
    res.json({
        success:true,
        data:savedBooking,
        message:'successfully saved'
    })
   }
   catch(err){
    res.json({
        success:false,
        message:err.message
    })
   }
    
}

const getApiBooking = async (req,res)=>{
    const fetchBooking = await Booking.find();

    res.json({
        success:true,
        data:fetchBooking,
        message:'successfully fetch booking'
    })
}

const putApiBooking = async (req,res)=>{
    const {id} = req.params;

    const {bus, passangerName, mobileNumber, seatNumber, to, from} = req.body;

    await Booking.updateOne({_id:id}, {$set:{bus, passangerName, mobileNumber, seatNumber, to, from}});

    res.json({
        success:true,
        message:"successfully update booking"
    })
}

const patchApiBooking = async (req,res)=>{
    const {id} = req.params;

    const { to, from} = req.body;

    await Booking.updateOne({_id:id}, {$set: {to:to,from:from}})

    res.json({
        success:true,
        message:"successfully update"
    })

}

const deleteApiBooking = async (req,res)=>{
   try{
    const {id} = req.params;

    const deleteBooking = await Booking.deleteOne({_id:id});
    res.json({
        success:true,
        data:deleteBooking,
        message:"successfully delete"
    })
   }
   catch(err){
    res.json({
        success:false,
        message:err.message
    })
   }
}
export {postApiBooking, getApiBooking, putApiBooking, patchApiBooking, deleteApiBooking};