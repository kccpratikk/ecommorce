import React from 'react'
import {assets} from "../assets/assets"
import { useNavigate } from 'react-router-dom'

function Account() {

    const navigate = useNavigate()

  return (
    <div className='h-100'>
    <h1 className='text-[30px] font-semibold'>Your Account</h1>
    <div className='flex flex-col gap-3 sm:flex-row mt-10'>
        <div className='flex items-center justify-center gap-3 border border-gray-200 rounded-md w-70 p-3 hover:bg-gray-100'>
       <img className='w-10' src={assets.order_png} alt=''/>
       <div>
         <p className='text-lg text-black'>Your Orders</p>
        <p className='text-sm text-gray-600'>Track, return and buy thing again</p>
       </div>
    </div>

     <div onClick={()=>navigate("/details")} className='flex items-center justify-center gap-3 border border-gray-200 rounded-md w-70 p-3 hover:bg-gray-100'>
        <img className='w-10' src={assets.order_png} alt=''/>
        <div>
        <p className='text-lg text-black'>Login & Security</p>
        <p className='text-sm text-gray-600'>Edit login, name,and mobile number</p>
        </div>  
    </div>

    
    </div>
    
    </div>
  )
}

export default Account