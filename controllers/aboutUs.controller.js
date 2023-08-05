import mongoose from "mongoose";

export const aboutUs = async (req, res) => {
  try {
    const db = mongoose.connection
    const collection = db.collection("about-us");
    const aboutUsData = await collection.find({}).toArray()
    res.json(aboutUsData)
  } catch (error) {
    console.error("Error al obtener los datos:", error)
    res.status(500).json({ message: "Ha ocurrido un error al obtener los datos." })
  }
}