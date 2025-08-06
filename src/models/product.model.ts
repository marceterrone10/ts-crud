import mongoose from 'mongoose';
import { Product } from '../types/productTypes'

const productSchema = new mongoose.Schema<Product>(
  { 
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    inStock: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
)

export const ProductModel = mongoose.model<Product>('Product', productSchema);
