"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const product_model_1 = require("../models/product.model");
class ProductRepository {
    async create(data) {
        const newProduct = new product_model_1.ProductModel(data);
        return await newProduct.save();
    }
    async find() {
        return await product_model_1.ProductModel.find();
    }
    async findById(id) {
        return await product_model_1.ProductModel.findById(id);
    }
    async update(id, data) {
        return await product_model_1.ProductModel.findByIdAndUpdate(id, data, { new: true });
    }
    async delete(id) {
        const result = await product_model_1.ProductModel.findByIdAndDelete(id);
        return result !== null;
    }
}
exports.ProductRepository = ProductRepository;
