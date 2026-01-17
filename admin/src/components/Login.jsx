import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

function Login({setToken}) {
  
   const [email,setEmail] = useState("")
   const [password,setPassword] = useState("")
   
   const onSubmit = async(e)=>{
     
      e.preventDefault()
    
      try{
         const response = await axios.post(backendUrl+"/api/user/admin",{email,password})
         
         if(response.data.success){
             setToken(response.data.token)
         }else{
            toast.error(response.data.message)
         }
      }catch(err){
        console.log(err)
        toast.error(err.message)
      }
}
  
    return (
    <div className='min-h-screen flex items-center justify-center w-full'>
       <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md text-center">
        <h1 className='text-2xl font-bold mb-2'>Admin Panel</h1>
        <form onSubmit={onSubmit}>
            <div className='mb-3 min-w-72'>
                <p className='text-sm font-medium text-gray-700 mb-2' >Email address</p>
                <input onChange={(e)=>setEmail(e.target.value)} className='rounded-md w-full px-3 border border-gray-300 outline-none' type='email' placeholder='Email' required/>
            </div>
             <div className='mb-3 min-w-72'>
                <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
                <input onChange={(e)=>setPassword(e.target.value)} className='rounded-md w-full px-3 border border-gray-300 outline-none' type='password' placeholder='Password' required/>
            </div>
           <button type='submit' className='mt-2 w-full py-2 px-4 bg-black text-white'>Login</button> 
        </form>
        </div> 
    </div>
  )
}

export default Login