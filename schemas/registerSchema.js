import mongoose from "mongoose";

const RegisterSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    default: "user",
  },
  image: {
    type: String
  }
});

export const RegisterModel = mongoose.model("User", RegisterSchema);
