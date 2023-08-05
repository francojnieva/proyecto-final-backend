import { RegisterModel } from "../schemas/registerSchema.js"

export const register = async (req, res) => {
    try {
        const { userName, email, password } = req.body
        const hash = await bcrypt.hash(password, 10)
        const user = await RegisterModel.create({ userName, email, password: hash })
        res.json(user)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}