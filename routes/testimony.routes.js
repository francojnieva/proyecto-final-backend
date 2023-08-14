import express from "express"
import { testimony } from "../controllers/testimony.controller.js"

const routerTestimony = express.Router()

routerTestimony.get("/testimony", testimony)

export default routerTestimony