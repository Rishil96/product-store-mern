import express from 'express';
import Product from '../models/product.js';
import mongoose from 'mongoose';

const router = express.Router();


// 1. Endpoint to get all products
router.get("/", async (req, res) => {
    try {
        const allProducts = await Product.find({});         // Find all products in JSON format
        res.status(200).json({
            success: true, 
            data: allProducts
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            success: false, 
            message: "Internal Server Error. Please check console for more details."
        })
    }
});


// 2. Endpoint to create a product for our store
router.post("/", async (req, res) => {
    const product = req.body;           // User will send product details via request body
    // Check if all the required details are provided in request
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({
            success: false,
            message: "Please provide all the details to add a new product."
        })
    }
    // Pass the details to the mongoose model to create a document
    const newProduct = new Product(product);

    // Save document in database
    try {
        newProduct.save();
        res.status(201).json({
            success: true,
            message: newProduct
        })
    } catch (error) {
        console.error("Error in creating product:", error.message);
        res.status(500).json({
            success: false,
            message: "Internal Server Error. Check console for more details."
        })
    }
});


// 3. Dynamic Endpoint to delete a product from our store
router.delete("/:id", async (req, res) => {
    // Get id from URL
    const { id } = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({
            success: true, 
            message: `Product with ID ${id} was deleted.`
        })
    } catch (error) {
        console.error(error);
        res.status(404).json({
            success: false, 
            message: `Product with ID ${id} was not found.`
        })
    }
});


// 4. Dynamic Endpoint to update a product in our store
router.put("/:id", async (req, res) => {

    const { id } = req.params;
    const product = req.body;

    // Check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            success: false, 
            message: "Invalid Product Id."
        });
    }

    // Find and update the product using ID
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        res.status(200).json({
            success: true, 
            data: updatedProduct
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            success: false, 
            message: "Internal Server Error. Please check console for more details."
        })
    }
});


export default router;
