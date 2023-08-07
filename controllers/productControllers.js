import { ProductModel } from "../schemas/product.models.js"

const getProducts = async(req, res) =>{/* req  res resolve*/
   try {
     const getProducts = await ProductModel.find()
     res.status(200).json({getProducts})
   } catch (error) {
    console.log(error)
   }

}

const getOneProduct = async(req, res) =>{/* req  res resolve*/
   try {
     const getProduct = await ProductModel.findOne({_id:req.params.id})
     res.status(200).json({getProduct})
   } catch (error) {
    console.log(error)
   }

}

const createProduct = async (req, res) =>{
   try {
    const existProd = await ProductModel.findOne({title: req.body.title})

    if(existProd){
        return res.status(400).json({msg:'Producto existente en la DB'})
    }


    const newProd = new ProductModel(req.body)
    await newProd.save()
    res.status(201).json({msg:'Producto creado', newProd})
    
   } catch (error) {
    res.status(500).json({msg:'Error al crear', error})
   }
}

const editProduct = async (req, res) =>{
    try {
        const {id} = req.params
        const updateProd = await ProductModel.findByIdAndUpdate({_id: id}, req.body, {new:true}) 
        res.status(200).json({updateProd})
    } catch (error) {
        console.log(error)
    }
}

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
