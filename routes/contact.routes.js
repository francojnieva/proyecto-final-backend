import express from "express"
import { contactForm } from "../controllers/contact.controller.js";

const routerContact = express.Router();

routerContact.post("/contact", contactForm)

export default routerContact