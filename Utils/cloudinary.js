import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
    cloud_name: "db3fzecgz",
    api_key: "274267963841855",
    api_secret: "W4nmSiXMWVPhQ4favjJmVQJloAA"
})

export const uploadImage = async (filePath) =>{
  return await cloudinary.uploader.upload(filePath, {
    folder: "products"
  })
}