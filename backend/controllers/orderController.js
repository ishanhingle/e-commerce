const catchAsync = require('../middleware/catchAsync');
const Product=require('../models/productModel');
const Order=require('../models/orderModel')
exports.createOrder=catchAsync(async(req,res,next)=>{
    const{
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    }=req.body;
    const order={
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        user:req.user._id,
        paidAt:Date.now(),

    }
    await Order.insertMany(order);
    res.status(201).json({
        success:true,
        order,
    })
})