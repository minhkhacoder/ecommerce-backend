const express = require('express');
const router = express.Router();
const {addItemToCart, getItemToCart} = require('../controllers/cart');
const {requireSignin, userMiddleware} = require('../common-middleware/index');


router.post('/user/cart/addtocart', requireSignin, userMiddleware, addItemToCart);
// router.get('/cart/getcart', getItemToCart);

module.exports = router;