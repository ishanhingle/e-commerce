const catchAsync = require("../middleware/catchAsync");
const errorHandler = require("../middleware/errorHandler");
const ExpressError = require("./ExpressError");

exports.isAuthenticated=catchAsync(async(req,res,next)=>{
    if(req.isAuthenticated()){
        next();
    }
    else{
        next(new ExpressError("PLEASE LOGIN FIRST",401));
    }
})
exports.authorizeRoles=(...roles)=>{
    return(req,res,next)=>{
    if(roles.includes(req.user.role)){
        next();
    }else{
        next(new ExpressError("Sorry,You are not authorized",403));
    }}
}