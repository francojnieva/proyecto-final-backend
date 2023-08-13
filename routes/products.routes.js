import { Router } from "express";
import { getProducts, getOneProduct, createProduct, editProduct, deleteProduct } from "../controllers/productControllers.js"
import auth from "../middleware/auth.js";
const router = Router()

router.get("/", getProducts)
router.get("/:id", getOneProduct)
router.post("/create-product",auth('admin'), createProduct)
router.put("/edit-product/:id",auth('admin'), editProduct)
router.delete("/:id",auth('admin'), deleteProduct)

export default router