const express=require('express');
const router=express.Router();
const { getAllProducts,addProduct,showProduct,editProduct,deleteProduct} = require('../controllers/productController');
const { isAuthenticated, authorizeRoles } = require('../utils/auth');



router.route('/')
      .get(getAllProducts)
router.route('/:id')
.get(showProduct)
      
//admin add products
router.route('/admin/add')
 .post(isAuthenticated,authorizeRoles("admin"),addProduct)

 router.route('/admin/:id')
       .put(isAuthenticated,authorizeRoles("admin"),editProduct)
       .delete(isAuthenticated,authorizeRoles("admin"),deleteProduct)

module.exports=router;