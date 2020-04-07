const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// GET REQUEST
router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

// POST REQUEST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;
