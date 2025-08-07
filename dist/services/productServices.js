"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async createProduct(product) {
        return this.productRepository.create(product);
    }
    async getProducts() {
        return this.productRepository.find();
    }
    async getProductById(id) {
        return this.productRepository.findById(id);
    }
    async updateProduct(id, data) {
        return this.productRepository.update(id, data);
    }
    async deleteProduct(id) {
        return this.productRepository.delete(id);
    }
}
exports.ProductService = ProductService;
