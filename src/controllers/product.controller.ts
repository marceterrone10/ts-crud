import { Request, Response } from 'express';
import { ProductService } from '../services/productServices';
import { ProductRepository } from '../repositories/productsRepositories';
import { Product, IProductService, IProductRepository } from '../types/productTypes';

const productRepository: IProductRepository = new ProductRepository();
const productService: IProductService = new ProductService(productRepository);

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products: Product[] = await productService.getProducts();
        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found' });
        }

        res.status(200).json(products);

    } catch ( error ) {
        console.log('Error fetching products:', error);
        res.status(500).json(
            { message: 'Internal Server Error' }
        );
    }
};

export const findProductById = async(req: Request, res: Response) => {

    try {
        const product: Product | null = await productService.getProductById(req.params.id);

        if (!product) return res.status(404).json({ message: 'Product not found' });

        res.json(product);

    } catch ( error ) {
        console.log('Error fetching product:', error);
        res.status(500).json(
            { message: 'Internal Server Error' }
        );
    }
};

export const createProduct = async (req: Request, res: Response) => {
    try {
        const newProduct: Product = req.body;
        const result = await productService.createProduct(newProduct);

        res.status(201).json(result);
    } catch ( error ) {
        console.log('Error creating product:', error);
        res.status(500).json(
            { message: 'Internal Server Error' }
        );
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const product = await productService.updateProduct(req.params.id, req.body);
        if (!product) return res.status(404).json({ message: 'Product not found' });
    } catch ( error ) {
        console.log('Error updating product:', error);
        res.status(500).json(
            { message: 'Internal Server Error' }
        );
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const result = await productService.deleteProduct(req.params.id);
        if (!result) return res.status(404).json({ message: 'Product not found' });
        res.json({ message: 'Product deleted successfully' })
    } catch ( error ) {
        console.log('Error deleting product:', error);
        res.status(500).json(
            { message: 'Internal Server Error' }
        );
    }
};