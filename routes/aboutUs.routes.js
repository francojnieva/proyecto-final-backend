import express from "express"
import { aboutUs } from "../controllers/aboutUs.controller.js";

const routerAboutUs = express.Router()

routerAboutUs.get("/about-us", aboutUs) 

export default routerAboutUs