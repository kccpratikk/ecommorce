import React from 'react'

function NewLetterBox() {

 const onSubmitHandler = (e)=>{
     e.prevenDefault();
 }

  return (
    <div className='text-center'>
     <p className='text-2xl font-medium text-gray-800'>Subscribe now to get 80% off</p>
     <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, sunt? Quis, reprehenderit illo. Perferendis consectetur aliquam inventore beatae? Quas sint necessitatibus quasi doloribus amet ipsa fuga alias, delectus temporibus quibusdam?</p>
     <form className='w-full flex sm:w-1/2 items-center gap-3 mx-auto my-6 border border-gray-200 pl-3'>
        <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your Email'/>
        <button onSubmit={onSubmitHandler} className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
     </form>
    </div>
  )
}

export default NewLetterBox