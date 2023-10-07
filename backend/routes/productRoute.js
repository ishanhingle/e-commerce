const express=require('express');
const router=express.Router();
const { getAllProducts,addProduct,showProduct,editProduct,deleteProduct} = require('../controllers/productController');
const { isAuthenticated, authorizeRoles } = require('../utils/auth');



router.route('/')
      .get(getAllProducts)

//admin add products
router.route('/add')
 .post(isAuthenticated,authorizeRoles("admin"),addProduct)

 router.route('/:id')
       .get(showProduct)
       .put(isAuthenticated,authorizeRoles("admin"),editProduct)
       .delete(isAuthenticated,authorizeRoles("admin"),deleteProduct)

module.exports=router;