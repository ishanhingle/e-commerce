const catchAsync = require('../middleware/catchAsync');
const User=require('../models/userModel');
const ExpressError = require('../utils/ExpressError');
const passport=require('passport');
exports.registerUser=catchAsync(async(req,res,next)=>{
    const newUser= new User({email:req.body.email,username:req.body.username});
    const registeredUser=await User.register(newUser,req.body.password);
    req.logIn(registeredUser,(err)=>{
        if(err){
            next(err)
        }
        else{
            res.status(201).json({
                success:true,
            })
        }
    })
})  
//login
exports.loginUser=catchAsync(async(req,res,next)=>{
    res.status(201).json({
        sucess:true,
        message:"logged in successfully"
    })
})
//logout
module.exports.logout=catchAsync(async(req,res,next)=>{
    req.logOut((err)=>{
        if(err){
            next(err);
        }else{
            res.status(200).json({
                success:true,
                message:"logged out successfully"
            })
        }
    })
})

//user details
exports.getUserDetails=catchAsync(async(req,res,next)=>{
    const user=await User.findById(req.user.id);
    res.status(200).json({
        success:true,
        user
    })
})
//update user
exports.updateUser=catchAsync(async(req,res,next)=>{
    const newUser={
        email:req.body.email,
        username:req.body.username
    }
    const user = await User.findByIdAndUpdate(req.user.id, newUser,{
        new: true,
        runValidators: true,
      });
    res.status(200).json({
        success:true,
        user
    })  
})
