import mongoose from "mongoose";

const ProductSchema =
    new mongoose.Schema({

        name: String,

        price: Number,

        category: String,

        description: String,

        image: String

    },
        {
            collection: "products"
        }
    );

export default
    mongoose.models.Product ||
    mongoose.model(
        "Product",
        ProductSchema
    );