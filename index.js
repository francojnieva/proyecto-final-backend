import app from "./app.js";
import connectDB from "./db.js";

connectDB()

const PORT = 5000

app.listen(PORT, ()  => {
    console.log(`Connection on port: ${PORT}`)
})