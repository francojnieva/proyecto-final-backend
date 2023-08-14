import { Router } from "express";
import { getProducts, getOneProduct, createProduct, editProduct, deleteProduct } from "../controllers/productControllers.js"
import auth from "../middleware/auth.js";
const router = Router()

router.get("/", getProducts)
router.get("/:id", getOneProduct)
router.post("/create-product", createProduct)
router.put("/edit-product/:id", editProduct)
router.delete("/:id", deleteProduct)

export default router