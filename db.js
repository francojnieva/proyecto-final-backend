import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/db")
        console.log("Database connect")
    } catch (error) {
        console.log("Error connecting to database", error)
    }
}

export default connectDB

