import { Router } from "express";
import { getProducts, getOneProduct, createProduct, editProduct, deleteProduct } from "../controllers/productControllers.js"
const router = Router()

router.get("/", getProducts)
router.get("/:id", getOneProduct)
router.post("/create-product", createProduct)
router.put("/edit-product/:id", editProduct)
router.delete("/:id", deleteProduct)

export default router