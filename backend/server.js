import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.js';
import mongoose from 'mongoose';

/* 
    Initialize project with node using "npm init -y"
    ProTip: Install nodemon as a dev dependency using "npm install nodemon -D" in the projects root folder
    and add "dev": "nodemon backend/server.js" to run the server using nodemon which restarts the server automatically 
    everytime we make changes.

    MONGODB Pass: 103xM2bBMltQpDKR
*/

// Load environment variables
dotenv.config();

const app = express();

// Middleware to use/parse json data in request body
app.use(express.json());


// 1. Endpoint to get all products
app.get("/api/products", async (req, res) => {
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
app.post("/api/products", async (req, res) => {
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
app.delete("/api/products/:id", async (req, res) => {
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
app.put("/api/products/:id", async (req, res) => {

    const { id } = req.params;
    const product = req.body;

    // Check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            success: false, 
            message: "Invalid Product Id."
        });
    }

    try {
        if (!product.name || !product.price || !product.image) {
            res.status(400).json({
                success: false, 
                message: "Please enter all the details i.e. name, price and image of the product"
            });
        }
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



app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000/");
});