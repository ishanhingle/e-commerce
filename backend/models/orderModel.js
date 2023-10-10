const mongoose=require('mongoose');
const productModel = require('./productModel');
const userModel = require('./userModel');
const orderSchema=mongoose.Schema({
   shippingInfo:{
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    pincode:{
        type:Number,
        required:true,
    },
    phoneNo:{
        type:Number,
        required:true,
    },
   },
   orderItems:{
       name:{
        type:String,
        required:true
       },
       quantity:{
        type:Number,
        required:true
       },
       price:{
        type:Number,
        required:true
       },
       image:{
        type:String,
        required:true
       },
       product:{
        type:mongoose.Schema.ObjectId,
        ref:productModel,
        required:true,
       }
   },
   user:{
    type:mongoose.Schema.ObjectId,
    ref:userModel,
    required:true
   },
   paymentInfo:{
    id:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    }
   },
   paidAt:{
    type:Date,
    required:true,
   },
   itemPrice:{
    type:Number,
    require:true,
   },
   shippingPrice:{
    type:Number,
    require:true,
   },
   taxPrice:{
    type:Number,
    require:true,
   },
   totalPrice:{
    type:Number,
    require:true,
   },
   orderStatus: {
    type: String,
    required: true,
    default: "Processing",
  },
  deliveredAt:Date,
  createdAt:{
    type:Date,
    default:Date.now()
  }
})
module.exports=new mongoose.model("Order",orderSchema);