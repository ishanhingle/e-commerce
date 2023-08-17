const mongoose=require('mongoose');
const passportLocalMongoose=require('passport-local-mongoose')
const validator = require('validator');

const userSchema=new mongoose.Schema({
   email:{
    type:String,
    require:true,
    validate:[validator.isEmail,"Email is invalid"]
   },
   avtar:{
        id:{
            type:String,
        },
        url:{
            type:String
        }
   },
   role:{
    type:String,
    default:"user"
   }
   
   
})
userSchema.plugin(passportLocalMongoose);