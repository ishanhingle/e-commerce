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


//ADMIN ROUTES

//get all users
exports.getAllUsers=catchAsync(async(req,res,next)=>{
    const users=await User.find({});
    res.status(200).json({
        success:true,
        users
    })
})
//get single users
exports.getSingleUSer=catchAsync(async(req,res,next)=>{
    const user=await User.findById(req.params.id);
    res.status(200).json({
        success:true,
        user
    })
})
//update roles
exports.updateUserRole=catchAsync(async(req,res,next)=>{
    const newUser={
        email:req.body.email,
        username:req.body.username,
        role:req.body.role,
    }
    const user = await User.findByIdAndUpdate(req.params.id, newUser,{
        new: true,
        runValidators: true,
      });
    res.status(200).json({
        success:true,
        user
    })  
})
//delete user
exports.deleteUser=catchAsync(async(req,res,next)=>{
    const user =await User.findById(req.params.id);
    if(!user){return next(new ExpressError("user not found",404))}
   await User.findByIdAndDelete(req.params.id);
   res.status(200).json({
    success:true,
    message:"user deleted successfully"
   })
})