const express=require('express');
const { registerUser, loginUser, logout, getUserDetails, updateUser, getAllUsers, getSingleUSer, updateUserRole, deleteUser } = require('../controllers/userController');
const passport=require('passport');
const { isAuthenticated, authorizeRoles } = require('../utils/auth');
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


//myDetais
router.route('/me')
      .get(isAuthenticated,getUserDetails)
router.route('me/update').put(isAuthenticated,updateUser)

//admin
router.route('/admin/allUsers')
      .get(isAuthenticated,authorizeRoles("admin"),getAllUsers)
router.route('/admin/user/:id')
      .get(isAuthenticated,authorizeRoles("admin"),getSingleUSer)
      .put(isAuthenticated,authorizeRoles("admin"),updateUserRole)
      .delete(isAuthenticated,authorizeRoles("admin"),deleteUser)