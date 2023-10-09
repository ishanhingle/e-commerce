const mongoose=require('mongoose');
const userModel=require('./userModel');
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name daalo bhai"]
    },
    description:{
        type:String,
        required:[true,"enter description"]
    },
    price:{
        type:Number,
        min:0,
        maxLength:[8,"itna mehnga nahi chalega bhai"]
    },
    rating:{
        type:Number,
        default:1
    },
    images:[{
        id:{
            type:String,
        },
        url:{
            type:String
        }
    }],
    stock:{
       type:String,
       max:15000,
       defaul:1
    },
    category:{
        type:String,
        required:[true,"please provide category"],
    },
    numOfReviews:{
        type:Number,
        default:0,
    },
    reviews:[{
        author:{
            type:mongoose.Schema.ObjectId,
            ref:userModel,
            required:true
        },
        author_name:{
            type:String,
            required:true,
        },
        rating:{
            type:Number,
            required:true
        },
        comment:{
            type:String,
            required:true
        }
    }],
    dateCreated:{
        type:Date,
        default:Date.now
    },
    author:{
        type:mongoose.Schema.ObjectId,
        ref:userModel,
        required:true,
    }
})
module.exports=mongoose.model('Product',productSchema);