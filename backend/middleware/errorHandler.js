module.exports=(err,req,res,next)=>{
    err.statusCode=err.statusCode || 500;
    err.msg=err.msg || "something went wrong";
    res.status(err.statusCode).json({
        success:false,
        error:err,
    })
}