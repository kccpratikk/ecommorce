import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js';
import jwt from "jsonwebtoken"


const createToken = (id) =>{
   return jwt.sign({id},process.env.JWT_SECRET)
}

const loginUser = async (req,res)=>{
    
    try{
      const {email,password} = req.body

      
      const user =await userModel.findOne({email})
       console.log(user)
      
      if(!user)
       return res.json({success:false,message:"user does not exist"})
      
     
      const isMatch = await bcrypt.compare(password,user.password)
      
      if(isMatch){
         
        const token = createToken(user._id)
        res.json({success:true,token})
      }else{
        res.json({sucess:false,message:"Invalid credientials"})
      }
        

    }catch(err)
    {
        res.json({sucess:false,message:err.message})  
    }
}

const registerUser = async (req,res)=>{
    try{
        const {name,email,password} = req.body;
        
        //check if user exists
        const exists = await userModel.findOne({email})
        
       
        if(exists){
             return res.json({success:false,message:"User already exists"})
        }

        // validating email format and strong password
        if(!validator.isEmail(email)){
            console.log(email)
        return res.json({success:false,message:"Please enter a valid email"})
        }

        if(password.length<8){
           return res.json({success:false,message:"password length should be greater than 8"})
        }
        
       //hashing user password
       const salt = await bcrypt.genSalt(10)
       const hashedPassword = await bcrypt.hash(password,salt)

       const newUser = new userModel({
        name,
        email,
        password:hashedPassword
       })

       const user = await newUser.save()

       const token = createToken(user._id)
       res.json({success:true,token})

    }catch(err){
        res.json({success:false,message:err.message})
    }
}

const adminLogin  = async (req,res)=>{
    try{
      const {email,password} = req.body
      
      if(email===process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
        const token  = jwt.sign(email+password,process.env.JWT_SECRET)
        res.json({success:true,token})
      }else{
        res.json({success:false,message:"invalid credientials"})
      }

    }catch(err){
        res.json({success:false,message:err.message})
    }
}

export {loginUser,registerUser,adminLogin}