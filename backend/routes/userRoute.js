const express=require('express');
const { registerUser, loginUser, logout, getUserDetails, updateUser } = require('../controllers/userController');
const passport=require('passport');
const { isAuthenticated } = require('../utils/auth');
const router=express.Router();

//register
router.route('/register')
      .post(registerUser);
//login
router.route('/login')
      .post(passport.authenticate('local',{failureMessage: true }),loginUser);      

//logout
router.route('/logout')
      .post(logout);
module.exports=router;

router.route('/my')
      .get(isAuthenticated,getUserDetails)
      .put(isAuthenticated,updateUser)