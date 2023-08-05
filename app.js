import express from "express"
import cors from "cors"
import routerContact from "./routes/contact.routes.js";
import path from "path"
import { fileURLToPath } from "url";
import routerAboutUs from "./routes/aboutUs.routes.js";
import routerTestimony from "./routes/testimony.routes.js";
import routerRegister from "./routes/register.routes.js";

const app = express()
app.use(express.json())
app.use(cors())
app.use(routerContact)
app.use(routerAboutUs)
app.use(routerTestimony)
app.use(routerRegister)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/images", express.static(path.join(__dirname, "images")))

export default app