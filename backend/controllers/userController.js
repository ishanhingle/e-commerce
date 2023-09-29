const catchAsync = require('../middleware/catchAsync');
const User=require('../models/userModel');
const ExpressError = require('../utils/ExpressError');
exports.registerUser=catchAsync(async(req,res,next)=>{
    const newUser= new User({email:req.body.email,username:req.body.username});
    User.register(newUser,req.body.password);
    res.status(201).json({
        success:true,
        newUser
    })
})