import { Router } from "express";
import { register, login, getUsers } from "../controllers/users.controller.js";

const userRouters = Router()

userRouters.post("/register", register)
userRouters.post("/login", login)
userRouters.get("/getUsers", getUsers)

export default userRouters