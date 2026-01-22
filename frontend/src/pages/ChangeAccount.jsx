import axios from 'axios'
import React,{useContext, useState,useEffect} from 'react'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'


function ChangeAccount() {
  
    const {token} = useContext(ShopContext)
  const [name,setName] = useState("")
   const [email,setEmail] = useState("")
   const [password,setPassword] = useState("")
   const backendUrl = import.meta.env.VITE_BACKEND_URL  

  const getData = async()=>{
          
    

        try{
           const response = await axios.post(backendUrl + "/api/user/get",{},{headers:{token}})

           if(response.data.success){

            const {name,email,password} = response.data.userData
             setName(name)
             setEmail(email)
             setPassword(password)
           }else{
             console.log(response.data.message)
           }
            
        }catch(err)
        {
            console.log(err.message)
        }
    }

    const handleSubmit = async(e)=>{
      e.preventDefault();

      try{
           const response = await axios.post(backendUrl + "/api/user/update",{name,email,password},{headers:{token}})

           if(response.data.success){
               toast.success(response.data.message)
           }else{
              toast.error(response.data.message)
           }
            
        }catch(err)
        {
            console.log(err.message)
             toast.error(err.message)
        } 

    }

   useEffect(()=>{
      
    getData()
    
   },[token])

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-6 border  border-gray-300 rounded-md h-90 w-80 items-center justify-center m-auto'>
      <div className='mt-1'>
      <p>Name</p>
      <input onChange={(e)=>setName(e.target.value)} value={name} type="text"className='p-2 border border-gray-400 rounded-md outline-none' />
     </div>  

     <div className=''>
      <p>Email</p>
      <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email"className='p-2 border border-gray-400 rounded-md outline-none' />
     </div>  

     <div className=''>
      <p>Password</p>
      <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password"className='p-2 border border-gray-400 rounded-md outline-none' />
     </div>  
     <button type="submit" className='border border-gray-400 p-2 rounded-md hover:opacity-50'>Update</button>
    </form>
  )
}

export default ChangeAccount