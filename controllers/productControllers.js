/* import { request } from "express" */
import { ProductModel } from "../schemas/product.models.js"
import { uploadImage } from "../utils/cloudinary.js"

const getProducts = async(req, res) =>{/* req  res resolve*/
   try {
     const getProducts = await ProductModel.find()
     res.status(200).json({getProducts})
   } catch (error) {
    console.log(error)
   }

}

const getOneProduct = async(req, res) =>{

   try {
     const getProduct = await ProductModel.findOne({_id:req.params.id})
     res.status(200).json({getProduct})
   } catch (error) {
    console.log(error)
   }

}

const createProduct = async (req, res) => {
    try {
       
      const { title, description, category, price, stock } = req.body;
      const existProd = await ProductModel.findOne({ title });
  
      if (existProd) {
        return res.status(400).json({ msg: "Producto existente en la DB" });
      }
  
       let cloudinaryResponse = {}; 
      if (req.files?.image) {
        const { image } = req.files;
        cloudinaryResponse = await uploadImage(image.tempFilePath);
      }
  
      const newProd = new ProductModel({
        title,
        description,
        category,
        price,
        stock,
        photo: cloudinaryResponse.secure_url,
      });
  
      await newProd.save();
      res.status(201).json({ msg: "Producto creado", newProd });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Error al crear producto", error });
    }
  };

const editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

   
    let cloudinaryResponse = {};
    if (req.files?.image) {
      const { image } = req.files;
      cloudinaryResponse = await uploadImage(image.tempFilePath);
      updateData.photo = cloudinaryResponse.secure_url;
    }

    
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      { _id: id },
      updateData,
      { new: true }
    );

    res.status(200).json({ updatedProduct });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error en la edición del producto", error });
  }
};


const deleteProduct = async (req, res) =>{
    try {
        const idProd = await ProductModel.findOne({_id: req.params.id})

        if(!idProd){
            return res.status(400).json({msg:'Producto no encontrado'})
        }

        await ProductModel.findByIdAndDelete({_id: req.params.id})
        res.status(200).json({msg: 'El producto se borro correctamente'})
    } catch (error) {
        console.log(error)
    }
}


export {
    getProducts,
    getOneProduct,
    createProduct,
    editProduct,
    deleteProduct
}
