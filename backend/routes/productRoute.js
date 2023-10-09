const express=require('express');
const router=express.Router();
const { getAllProducts,addProduct,showProduct,editProduct,deleteProduct} = require('../controllers/productController');
const { isAuthenticated, authorizeRoles } = require('../utils/auth');
const { addReview } = require('../controllers/productController');
const { getAllReviews } = require('../controllers/productController');
const { deleteReview } = require('../controllers/productController');



router.route('/')
      .get(getAllProducts)
router.route('/:id')
      .get(showProduct)
router.route('/review')
      .put(isAuthenticated,addReview)      
router.route('/reviews/:id')
       .get(getAllReviews)
       .delete(isAuthenticated,deleteReview);    
//admin add products
router.route('/admin/add')
 .post(isAuthenticated,authorizeRoles("admin"),addProduct)

 router.route('/admin/:id')
       .put(isAuthenticated,authorizeRoles("admin"),editProduct)
       .delete(isAuthenticated,authorizeRoles("admin"),deleteProduct)

module.exports=router;