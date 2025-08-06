import { Repository } from "./repositoryTypes";

export interface Product {
    id: string;
    name: string;
    price: number;
    inStock: boolean;
}

export interface IProductRepository extends Repository<Product> {}

export interface IProductService {
    createProduct(data: Product): Promise<Product>;
    getProducts(): Promise<Product[]>;
    getProductById(id: string): Promise<Product | null>;
    updateProduct(id: string, data: Partial<Product>): Promise<Product | null>;
    deleteProduct(id: string): Promise<boolean>;
};