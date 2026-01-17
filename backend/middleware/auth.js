import jwt from "jsonwebtoken"

const authUser = (req,res,next)=>{

    const {token} = req.headers;
    
    if(!token)
    return res.json({sucess:false,message:"Not authorized login again"})
   
    try{
     const token_decode = jwt.verify(token,process.env.JWT_SECRET);
     
     req.body.userId = token_decode.id
     next()

    }catch(err){
        console.log(err)
      res.json({sucess:false,message:err.message})    
    }

}

export default authUser