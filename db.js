import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const connectDB = async () => {
    try {
      const connectionURL = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.zz2tqfw.mongodb.net/?retryWrites=true&w=majority`
      await mongoose.connect(connectionURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      console.log("Database connected")
    } catch (error) {
      console.log("Error connecting to database", error)
    }
  }

export default connectDB