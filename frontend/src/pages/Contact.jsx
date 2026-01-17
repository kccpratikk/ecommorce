import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'

function Contact() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
      <Title text1="CONTACT" text2="US"/>
      </div>
    
     <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
    <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt=''/>
    <div className='flex flex-col justify-center items-start gap-6'>
      <p className='font-semibold text-xl text-gray-600'>Our Store</p>
      <p className='text-gray-600'>5490 willms station <br/> Suit 350, Washington</p>
      <p className='text-gray-500'>Tel: (413) 555-01231 <br/> Email: admin@foreve.com</p>
      <p className='text-xl font-semibold text-gray-500'>Careers at foreve</p>
      <p className='text-gray-500'>Learm more about our Teams and Job openings</p>
      <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
     </div>
    </div> 
    </div>
  )
}

export default Contact