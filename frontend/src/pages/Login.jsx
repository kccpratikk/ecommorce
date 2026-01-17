import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Login() {

  const [currentState,setCurrentState] = useState('Login')
  const {token,setToken} = useContext(ShopContext)
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
   const [name,setName] = useState("")

  const navigate = useNavigate()

  const onSubmitHandle = async (e)=>{
   e.preventDefault();
   
   try{
     
    let response;

     if(currentState==="Sign Up")
     {
        response = await axios.post(backendUrl + "/api/user/register",{name,email,password})

     }else{
      
      response = await axios.post(backendUrl + "/api/user/login",{email,password})
     }

     if(response.data.success){
       setToken(response.data.token)
       localStorage.setItem("token",response.data.token)
     }else{
        console.log(response.data.message)
        toast.error(response.data.message)
     }

   
}catch(err){
        console.log(err.message)
        toast.error(err.message)
   }
    
}

useEffect(()=>{
  if(token)
   navigate("/") 
},[token])


  return (
    <form onSubmit={onSubmitHandle} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
       <p className='prata-regular text-3xl'>{currentState}</p>
       <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
      {currentState ==="Login"?"": <input onChange={(e)=>setName(e.target.value)} type="text" className='w-full px-2 py-2 border border-gray-800' placeholder='Name' required/>}
      
     
      <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className='w-full px-2 py-2 border border-gray-800' placeholder='Email' required/>
      <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className='w-full px-2 py-2 border border-gray-800' placeholder='Password' required/>
       <div className='w-full flex justify-between text-sm mt-[-px]'>
       <p className='cursor-pointer'>Forot your password?</p>
       {
          currentState=="Login"?
          <p onClick={()=>setCurrentState("Sign Up")} className='cursor-pointer'>Create account</p>
          :<p onClick={()=>setCurrentState("Login")} className='cursor-pointer'>Login Here</p>
       }
       </div>
       <button className='bg-black border px-8 py-2 font-light text-white'>{currentState==="Login"?"Login":"Sign Up"}</button>
    </form>
  )
}

export default Login