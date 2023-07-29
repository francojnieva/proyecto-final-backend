import express from "express"
import cors from "cors"
import router from "./routes/auth.routes.js"
import path from "path"

const app = express()
app.use(express.json())
app.use(cors())
app.use(router)
app.use("/images", express.static(path.join(__dirname, "images")))

export default app