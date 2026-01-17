import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div >
        <div className='flex flex-col sm:flex-row  gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt=''/>
                <p className=' text-gray-600 w-full'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quis doloribus facere magnam neque officia expedita, maiores nisi nihil nostrum deserunt culpa nesciunt itaque, eaque est quasi voluptatem? Dicta, blanditiis.</p>
            </div>
            <div>
               <p className='tex-xl font-medium mb-5'>COMPANY</p>
               <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy</li>
                </ul> 
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-212-456-2312</li>
                    <li>contact@forever.com</li>
                </ul>
            </div>
        </div>
        <div className='py-5 text-center text-sm'>
            <hr className='bg-gray-500'/>
          <p className=''>Copyright 2024@ forever.com - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer