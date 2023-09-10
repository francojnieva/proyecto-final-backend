import { RegisterModel } from "../schemas/registerSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { uploadImage } from "../Utils/cloudinary.js";

dotenv.config();

export const register = async (req, res) => {
  try {
    const { userName, email, password, role } = req.body;
    const hash = await bcrypt.hash(password, 10);
    let cloudinaryResponse = {};
    if (req.files?.image) {
      const { image } = req.files;
      cloudinaryResponse = await uploadImage(image.tempFilePath);
    }

    const newUser = new RegisterModel({
      userName,
      email,
      password: hash,
      role,
      image: cloudinaryResponse.secure_url,
    });

    await newUser.save();

    res.status(201).json({ msg: "Usuario creado exitosamente", newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await RegisterModel.findOne({ email: email });

    if (user) {
      const response = await bcrypt.compare(password, user.password);
      if (response) {
        const secretKey = process.env.SECRET_KEY;
        const token = jwt.sign(
          { user_id: user._id, role: user.role },
          "prueba1",
          { expiresIn: "1d" }
        );

        res.json({
          msg: "Exitoso",
          role: user.role,
          name: user.userName,
          image: user.image,
          token,
        });
      } else {
        res.json("Los datos no son correctos");
      }
    } else {
      res.json("No existe");
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUsers = async (req, res) => {};
