import React ,{useContext}from 'react'
import Hero from '../components/Hero'
import LatestCollections from '../components/LatestCollections'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import { ShopContext} from '../context/ShopContext'
import NewLetterBox from '../components/NewLetterBox'


function Home() {
 
   const {showSearch} = useContext(ShopContext)

   console.log(showSearch)
  return (
    <div className={showSearch?"opacity-20":""}><Hero/><LatestCollections/><BestSeller/><OurPolicy/><NewLetterBox/></div>
  )
}

export default Home