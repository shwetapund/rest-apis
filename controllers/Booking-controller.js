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

export {postApiBooking, getApiBooking, putApiBooking};