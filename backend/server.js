import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/product.js';

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


// Endpoint to create a product for our store
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


app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000/");
});