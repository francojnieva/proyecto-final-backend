import express from "express"
import { contactForm, getContacts } from "../controllers/contact.controller.js";

const routerContact = express.Router();

routerContact.post("/contact", contactForm)
routerContact.get("/get-contacts", getContacts)

export default routerContact