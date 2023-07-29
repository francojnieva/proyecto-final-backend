import express from "express"
import { contactForm } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/contact", contactForm)

export default router