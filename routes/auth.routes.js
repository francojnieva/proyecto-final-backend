import express from "express"
import { contactForm } from "../controllers/auth.controller.js";
import { aboutUs } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/contact", contactForm)
router.get("/about-us", aboutUs) 

export default router