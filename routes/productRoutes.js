const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.post('/products', upload.array('productImages', 10), productController.createProduct);
router.get('/products/:productId', productController.getProductById);
router.get('/products', productController.getActiveProducts);
router.put('/products/:productId', productController.updateProductById);
router.delete('/products/:productId', productController.deleteProductById);

module.exports = router;
