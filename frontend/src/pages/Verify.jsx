import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function Verify() {
   
    const navigate = useNavigate()
    const [searchParams,setSearchParams] = useSearchParams()
    const {token,setCartItems,backendUrl} = useContext(ShopContext)
   
    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')
    
   const varifyPayment = async()=>{
       try{
         
         if(!token) return null;

         const response = await axios.post(backendUrl + '/api/order/verifyStripe',{success,orderId},{headers:{token}})
         console.log(response.data)
         if(response.data.success){
          setCartItems({})
          navigate('/orders')
         }else{
          navigate('/cart')
         }
       }catch(err){
        console.log(err.message)
        toast.error(err.message)
       }  
      
   }

   useEffect(()=>{
     varifyPayment()
   },[token])
 
    return (
    <div></div>
  )
}
