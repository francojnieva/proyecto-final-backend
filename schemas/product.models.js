import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique:true
        },
        description: {
            type: String,
            required: true,
        },
     //   image:{
            
   //         required: true,
    //    },
    category:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    stock:{
        type: Number,
        default:''
    }
        
        

    }
)

export const ProductModel = mongoose.model("product", productSchema)