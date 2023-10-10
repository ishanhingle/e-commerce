const express=require('express');
const { createOrder } = require('../controllers/orderController');
const { isAuthenticated } = require('../utils/auth');
const router=express.Router();


router.route('/new')
      .post(isAuthenticated,createOrder);  




    module.exports=router;