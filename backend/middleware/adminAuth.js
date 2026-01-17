
import jwt from "jsonwebtoken"

const adminAuth = async(req,res,next)=>{
  
    try{
      const {token} = req.headers
     

      if(!token){
        return res.json({sucess:false,message:"Not authorized Login again"})
      }

      const token_decode = jwt.verify(token,process.env.JWT_SECRET)
       console.log(token_decode)
      if(token_decode!==process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
          return res.json({sucess:false,message:"Not authorized Login again"})        
      }
     
      next()

    }catch(err){
      console.log(err)
      res.json({success:false,message:err.message})
    }
}

export default adminAuth
