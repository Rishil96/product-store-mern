import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js'

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

// Use products router as middleware
app.use("/api/products", productRoutes);


app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000/");
});