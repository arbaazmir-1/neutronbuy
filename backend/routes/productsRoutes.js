const express = require('express')
const router = express.Router();
let {getByIDProducts,getProducts} = require('../controler/productController')



router.route('/').get(getProducts)

router.route('/:id').get(getByIDProducts)

module.exports = router