import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';

export default function SearchBar() {

   const {showSearch,
       setShowSearch,
       search,
       setSearch} = useContext(ShopContext)

      if(!showSearch) return null;

  return (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input onChange={(e)=>setSearch(e.target.value)} value={search} type="text" className='flex-1 outline-none bg-inherit text-sm' placeholder='Search'/>
        <img className='w-4' src={assets.search_icon} alt=''/>
        </div>
        <img src={assets.cross_icon} onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer' alt=''/>
    </div>
  )
}
