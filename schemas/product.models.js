import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique:true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
    category:{
        type: String,
        required: true,
        trim: true,
    },
    price:{
        type: Number,
        required: true,
        trim: true,
    },
    stock:{
        type: Number,
        default:'',
        trim: true,
    },
  photo:{
        
    },
        
        

    }
)

export const ProductModel = mongoose.model("product", productSchema)