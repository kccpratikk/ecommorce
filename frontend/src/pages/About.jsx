import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewLetterBox from '../components/NewLetterBox'

function About() {
  return (
    <div className='text-2xl text-center pt-8 border-t'>
    <Title text1="ABOUT" text2="US"/>
    <div className='my-10 flex flex-col md:flex-row gap-16'>
    <img src={assets.about_img} className='w-full md:max-w-[450px]'/>
    <div className='text-shadow-gray-600 text-sm sm:text-base flex flex-col justify-center md:w-2/4 gap-6'>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id molestias quos minima mollitia nihil, maxime illum cum quia porro quisquam rerum harum ratione placeat quaerat non praesentium alias illo? Repellendus?</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam perferendis dolor inventore est minima dolorum natus? Consectetur molestiae dolore culpa maiores expedita voluptatem corrupti aspernatur quos error illum! Blanditiis, voluptatum.</p>
    <b className='text-gray-800'>Our Mission</b>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, reprehenderit error quasi eum blanditiis officiis, cupiditate voluptatum quisquam maiores corrupti saepe aliquid voluptas. Soluta non aut natus minima ea quidem?</p>
    </div>
    </div>
    
    <div className='flex flex-col md:flex-row text-sm mb-20'>
     <div className="border border-gray-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
      <p>Quality Assurance:</p>
      <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, qui facere consectetur iusto possimus beatae expedita tempore incidunt, porro minus doloremque blanditiis reiciendis assumenda voluptatem vel quidem odit id exercitationem?</p>
     </div>
      <div className="border border-gray-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
      <p>Convenience:</p>
      <p className='text-gray-600' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, qui facere consectetur iusto possimus beatae expedita tempore incidunt, porro minus doloremque blanditiis reiciendis assumenda voluptatem vel quidem odit id exercitationem?</p>
     </div>
      <div className="border border-gray-400 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
      <p>Excellent custome service:</p>
      <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, qui facere consectetur iusto possimus beatae expedita tempore incidunt, porro minus doloremque blanditiis reiciendis assumenda voluptatem vel quidem odit id exercitationem?</p>
     </div>
    </div>
    <div className='text-sm'>
    <NewLetterBox/>
    </div>
    
    </div>
  )
}

export default About