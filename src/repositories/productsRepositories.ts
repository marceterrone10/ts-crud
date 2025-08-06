import { IProductRepository, Product } from "../types/productTypes";
import { ProductModel } from "../models/product.model";

export class ProductRepository implements IProductRepository {

    async create(data: Product): Promise<Product> {
        const newProduct = new ProductModel(data);
        return await newProduct.save();
    }

    async find(): Promise<Product[]> {
        return await ProductModel.find();
    }

    async findById(id: string): Promise<Product | null> {
        return await ProductModel.findById(id);
    }

    async update(id: string, data: Partial<Product>): Promise<Product | null> {
        return await ProductModel.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id: string): Promise<boolean> {
        const result = await ProductModel.findByIdAndDelete(id);
        return result !== null;
    }

}