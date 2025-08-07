"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.findProductById = exports.getAllProducts = void 0;
const productServices_1 = require("../services/productServices");
const productsRepositories_1 = require("../repositories/productsRepositories");
const productRepository = new productsRepositories_1.ProductRepository();
const productService = new productServices_1.ProductService(productRepository);
const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getProducts();
        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found' });
        }
        res.status(200).json(products);
    }
    catch (error) {
        console.log('Error fetching products:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
exports.getAllProducts = getAllProducts;
const findProductById = async (req, res) => {
    try {
        const product = await productService.getProductById(req.params.id);
        if (!product)
            return res.status(404).json({ message: 'Product not found' });
        res.json(product);
    }
    catch (error) {
        console.log('Error fetching product:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
exports.findProductById = findProductById;
const createProduct = async (req, res) => {
    try {
        const newProduct = req.body;
        const result = await productService.createProduct(newProduct);
        res.status(201).json(result);
    }
    catch (error) {
        console.log('Error creating product:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
exports.createProduct = createProduct;
const updateProduct = async (req, res) => {
    try {
        const product = await productService.updateProduct(req.params.id, req.body);
        if (!product)
            return res.status(404).json({ message: 'Product not found' });
    }
    catch (error) {
        console.log('Error updating product:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
exports.updateProduct = updateProduct;
const deleteProduct = async (req, res) => {
    try {
        const result = await productService.deleteProduct(req.params.id);
        if (!result)
            return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product deleted successfully' });
    }
    catch (error) {
        console.log('Error deleting product:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
exports.deleteProduct = deleteProduct;
