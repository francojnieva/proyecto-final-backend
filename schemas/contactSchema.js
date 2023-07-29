import mongoose from "mongoose"

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  lastname: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  }
})

export const ContactModel = mongoose.model("Contact", ContactSchema)