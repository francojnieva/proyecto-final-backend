import jwt from 'jsonwebtoken'
import { RegisterModel } from '../schemas/registerSchema.js'

 const auth =  (role) => async(req, res, next) =>{
   try {

    const token = req.header('auth').replace('Bearer ', '')
    const verify = jwt.verify(token, 'prueba1')
    const userExist = await RegisterModel.findOne({_id: verify.user_id})

     if(userExist.role === role){
        next()
     }else{
        res.status(401).json({msg: 'No Autorizado'})
     }
    
   } catch (error) {
    console.log(error)
   }

}

export default auth
