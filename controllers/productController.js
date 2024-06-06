const productModel = require('../models/productModel');
const path = require('path');
const fs = require('fs');

exports.createProduct = (req, res) => {
    try {
        const product = {
            productId: req.body.productId,
            productName: req.body.productName,
            productDescription: req.body.productDescription,
            productImages: req.files.map(file => file.path),
            isActive: req.body.isActive
        };
        const newProduct = productModel.create(product);    
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getProductById = (req, res) => {
    try {
        const product = productModel.getById(req.params.productId);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getActiveProducts = (req, res) => {
    try {
        const products = productModel.getAll().filter(product => product.isActive).slice(0, 10);
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateProductById = (req, res) => {
    try {
        const updatedProduct = productModel.updateById(req.params.productId, req.body);
        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
        res.json(updatedProduct);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteProductById = (req, res) => {
    try {
        let deletedProduct = productModel.deleteById(req.params.productId);
        if (!deletedProduct) return res.status(404).json({ message: 'Product not found' });
        console.log(deletedProduct)
        deletedProduct.productImages.forEach(image => fs.unlinkSync(path.resolve(image)));
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
