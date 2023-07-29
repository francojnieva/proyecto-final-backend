import { ContactModel } from "../schemas/contactSchema.js";


export const contactForm = async (req, res) => {
  const { name, lastname, email, message } = req.body
  const contact = new ContactModel({ name, lastname, email, message })

  try {
    await contact.save();
    res.status(200).json({ message: "Datos guardados correctamente." })
  } catch (error) {
    console.error("Error al guardar los datos:", error);
    res.status(500).json({ message: "Ha ocurrido un error al guardar los datos." })
  }
}

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