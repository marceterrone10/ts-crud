import { IProductRepository, IProductService, Product } from "../types/productTypes";

export class ProductService implements IProductService {
    private productRepository: IProductRepository;
    
    constructor(productRepository: IProductRepository) {
        this.productRepository = productRepository;
    }

    async createProduct(product: Product): Promise<Product> {
        return this.productRepository.create(product);
    }

    async getProducts(): Promise<Product[]> {
        return this.productRepository.find();
    }

    async getProductById(id: string): Promise<Product | null> {
        return this.productRepository.findById(id);
    }

    async updateProduct(id: string, data: Partial<Product>): Promise<Product | null> {
        return this.productRepository.update(id, data);
    }

    async deleteProduct(id: string): Promise<boolean> {
        return this.productRepository.delete(id);
    }
}