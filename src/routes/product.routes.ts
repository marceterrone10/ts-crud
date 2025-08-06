import { Router } from 'express';
import { getAllProducts, findProductById, createProduct, updateProduct, deleteProduct } from '../controllers/product.controller';

const router = Router();

router.get('/', getAllProducts);
router.get('/:id', findProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
