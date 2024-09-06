import express from 'express';
import { createProduct, deleteProduct, getProducts, updateProduct } from '../controllers/product.controller.js';

const router = express.Router();


// 1. Endpoint to get all products
router.get("/", getProducts);


// 2. Endpoint to create a product for our store
router.post("/", createProduct);


// 3. Dynamic Endpoint to delete a product from our store
router.delete("/:id", deleteProduct);


// 4. Dynamic Endpoint to update a product in our store
router.put("/:id", updateProduct);


export default router;
