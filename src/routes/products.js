const express = require('express');
const router = express.Router();
const multer  = require('multer');
const {createProduct, getProductsBySlug } = require('../controllers/products');
const {requireSignin, adminMiddleware} = require('../common-middleware/index');
const shortid = require('shortid');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname)
    }
  })

const upload = multer({ storage });

router.post('/product/create', requireSignin, adminMiddleware, upload.array('productPictures') ,createProduct);
router.get('/product/:slug', getProductsBySlug)

module.exports = router;