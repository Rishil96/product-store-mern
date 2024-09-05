import mongoose, { mongo } from "mongoose";

// Create the structure which includes the details that we need in our schema
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        },
    }, {
        timestamps: true        // createdAt, updatedAt
    }
);


// Create our model named first input followed by schema in second input of model class
const Product = mongoose.model("Product", productSchema);

export default Product;
