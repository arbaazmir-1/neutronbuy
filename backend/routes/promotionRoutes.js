const express = require('express')
const router = express.Router();
const {getPromotionProducts} = require('../controler/promotionController')



router.route('/').get(getPromotionProducts)



module.exports = router