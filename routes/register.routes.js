import express from "express"
import { register } from "../controllers/register.controller.js"

const routerRegister = express.Router()

routerRegister.post("/register", register) 

export default routerRegister