import React from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'


function PlaceOrder() {

  const [method,setMethod] = useState("cod")
  const navigate = useNavigate()
  const {backendUrl,token,cartItems,setCartItems,getCartAmount,delivery_fee,product} = useContext(ShopContext)
  const [formData,setFormData] = useState({
     firstName:"",
     lastName:"",
     email:"",
     street:"",
     city:"",
     state:"",
     zipcode:"",
     country:"",
     phone:"",
  })

  const onChangeHandle =(e)=>{
     
    setFormData(prev=>({
      ...prev,
      [e.target.name]:e.target.value}));
  }

  const onSubmitHandle=async(e)=>{
   e.preventDefault();

   try{
       
     let orderItems = []
     for(const itemId in cartItems){
        for(const size in cartItems[itemId]){
            if(cartItems[itemId][size]>0){
              let itemInfo = product.find(item=>item._id===itemId)
              if(itemInfo){
                orderItems.push({
                  ...itemInfo,
                  size,
                  quanity:cartItems[itemId][size]
                })
               
              }
              
            }
        }
     }

      
      
     let orderData = {
      address: formData,
      items:orderItems,
      amount:getCartAmount() + delivery_fee,
     }

     switch(method){

       // API call for COD
       case 'cod': {
       
        const response =  await axios.post(backendUrl + '/api/order/place',orderData,{headers:{token}})
        if(response.data.success){
          setCartItems({})
          navigate("/orders")
          
        }else{
          toast.error(response.data.message)
        } 
        }
        break
        
        case 'stripe':{
           const responseStrpe = await axios.post(backendUrl + "/api/order/stripe",orderData,{headers:{token}})
           
           if(responseStrpe.data.success){
            const {session_url} = responseStrpe.data
            window.location.replace(session_url)
           }else{
            toast.error(responseStrpe.data.message)
           }
          }
      
     }
    }catch(err){
       console.log(err)
       toast.error(err.message)
   }

  }

  return (
    <form onSubmit={onSubmitHandle} className='flex flex-col sm:flex-row justify-between gap-4 p-5 sm:pt-14 min-h-[80vh] border-t'>
      {/*Left side...*/}
      <div className='flex flex-col gap-4 sm:max-w-[480px]'>
       <div className='text-xl sm:text-2xl my-3'>
           <Title text1="DELEVERY" text2="INFORMATION"/>
       </div>
       <div className='flex gap-3'>
          <input required onChange={onChangeHandle} name="firstName" value={formData["firstName"]} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type = "text" placeholder='First name'/>
          <input required onChange={onChangeHandle} name="lastName" value={formData["lastName"]} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type = "text" placeholder='Last name'/>
       </div>
       <input required onChange={onChangeHandle} name="email" value={formData["email"]} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type = "email" placeholder='Email Address'/>
       <input required onChange={onChangeHandle} name="street" value={formData["street"]} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type = "text" placeholder='Street'/>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandle} name="city" value={formData["city"]} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type = "text" placeholder='City'/>
          <input required onChange={onChangeHandle} name="state" value={formData["state"]} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type = "text" placeholder='State'/>
       </div>
       <div className='flex gap-3'>
          <input required onChange={onChangeHandle} name="zipcode" value={formData["zipcode"]} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type = "number" placeholder='Zipcode'/>
          <input required onChange={onChangeHandle} name="country" value={formData["country"]} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type = "text" placeholder='Country'/>
       </div>
       <input onChange={onChangeHandle} name="phone" value={formData["phone"]} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type = "number" placeholder='Phone'/>
      </div>
      {/*  right side...*/}
      <div className='mt-8'>
       <div className='m-8 min-w-80'>
        <CartTotal/>
       </div>
       <div className='mt-12'>
        <Title text="PAYMENT" text2="METHOD"/>
        {/*Payment method selection*/}
        <div className='flex flex-col gap-3 lg:flex-row'>
          <div onClick={()=>setMethod("stripe")} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method=="stripe"?"bg-green-400":""}`}></p>
              <img className='h-5 mx-4' src={assets.stripe_log} alt=''/>
          </div>
           <div onClick={()=>setMethod("razor")}  className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method=="razor"?"bg-green-400":""}`}></p>
              <img className='h-5 mx-4' src={assets.razorpay_logo} alt=''/>
          </div>
           <div onClick={()=>setMethod("cod")}   className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method=="cod"?"bg-green-400":""}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELEIVERY</p>
          </div>
        </div>
        <div className='w-full text-end mt-8'>
          <button type="submit" className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
        </div>
       </div>
      </div>
    </form>
  )
}

export default PlaceOrder