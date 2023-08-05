import mongoose from "mongoose";

const connectDB = async () => {
    try {
      const connectionURL = 'mongodb+srv://franco-test:franco-test@cluster0.nqg9ebl.mongodb.net/db?retryWrites=true&w=majority'
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