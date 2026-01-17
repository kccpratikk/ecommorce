import React from 'react'
import { assets } from '../assets/assets'

function OurPolicy() {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-grey-600'>
    <div>
        <img src={assets.exchange_icon} alt='' className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-grey-400'>We offer hussle free exchange</p>
    </div>
     <div>
        <img src={assets.quality_icon} alt='' className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>7 days return policy</p>
        <p className='text-grey-400'>We provide 7 days return policy</p>
    </div>
     <div>
        <img src={assets.support_icon} alt='' className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>Best Support</p>
        <p className='text-grey-400'>Best Support 24/7</p>
    </div>
    </div>
  )
}

export default OurPolicy