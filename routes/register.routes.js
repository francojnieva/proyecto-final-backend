import express from "express"
import { register } from "../controllers/register.controller.js"

const routerRegister = express.Router()

routerRegister.get("/register", register) 

export default routerRegister