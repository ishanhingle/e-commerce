const express=require('express');
const router=express.Router();
const { getAllProducts,addProduct,showProduct,editProduct,deleteProduct} = require('../controllers/productController');



router.route('/')
      .get(getAllProducts)

//admin add products
router.route('/add')
 .post(addProduct)

 router.route('/:id')
       .get(showProduct)
       .put(editProduct)
       .delete(deleteProduct)

module.exports=router;