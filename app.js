import express from "express"
import cors from "cors"
import router from "./routes/auth.routes.js"
import path from "path"
import { fileURLToPath } from "url";

const app = express()
app.use(express.json())
app.use(cors())
app.use(router)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/images", express.static(path.join(__dirname, "images")))

export default app