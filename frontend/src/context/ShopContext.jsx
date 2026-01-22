import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios"

export const ShopContext = createContext();

export const ShopContextProvider = ({children})=>{
  
    const currency = "$";
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [showSearch,setShowSearch] = useState(false)
    const [searchIconVisible, setSearchIconVisible] = useState(true)
    const [search,setSearch] = useState()
    const [cartItems,setCartItems] = useState({})
    const [product,setProduct] = useState([])
    const [token,setToken] = useState("")
    const loc= useLocation()

    

    const addToCart = async(itemId,size)=>{
        
        if(!size){
        toast.error("select product size")
      return     
    }

       let cartData = structuredClone(cartItems)
         
        if(cartData[itemId])
        {
            if(cartData[itemId][size])
            {
                cartData[itemId][size]+=1;
            }else
                cartData[itemId][size]=1;
        }else
            {
               cartData[itemId]= {};
               cartData[itemId][size]=1;  
            } 
        setCartItems(cartData); 
        
        try{
           await axios.post(backendUrl + "/api/cart/add",{itemId,size},{headers:{token}})
           
        }catch(err){
           console.log(err.message)
           toast.error(err.message)
        }
    }
   


    const getCartCount = ()=>{
        let cnt=0;

        for(const id in cartItems)
        {
            for(const size in cartItems[id])
              cnt+=cartItems[id][size];  
        } 
       return cnt;   
    }

    const updateCart = async(itemId,size,quantity)=>{
       
        let cartData = structuredClone(cartItems)
        cartData[itemId][size]=quantity;
       setCartItems(cartData)

       if(token){
        try{
           await axios.post(backendUrl+"/api/cart/update",{itemId,size,quantity},{headers:{token}})
           
        
        }catch(err){
          console.log(err.message)
           toast.error(err.message)
        }        
       }
    }

    const getCartAmount = ()=>{
        let amt=0;

        for(const items in cartItems){
            let productInfo = product.find((item)=>item._id==items)

          for(const item in cartItems[items]){
            amt+=productInfo?.price*cartItems[items][item]
          }

        }
       return amt
    }

    const getProductData =async ()=>{
       
       
        try{
          const response = await axios.get(backendUrl+"/api/product/list")
          
          if(response.data.success)
          setProduct(response.data.products)
          else
          console.log(response.data.message)  
              
        
        }catch(err){
            console.log(err.message)
        }
    }

    const getUserCart = async(token)=>{
        try{
            console.log(token)
          const response = await axios.post(backendUrl + "/api/cart/get",{},{headers:{token}})
           
          console.log(response)
           if(response.data.success){
               setCartItems(response.data.cartData)
           }

        }catch(err){
          toast.error(err.message)   
          console.log(err.message)
        }
    }

    const value={
       product,
       currency,
       delivery_fee,
       showSearch,
       setShowSearch,
       search,
       setSearch,
       cartItems,
       addToCart,
       getCartCount,
       updateCart,
       getCartAmount,
       setCartItems,
       backendUrl,
       token,
       setToken,
       searchIconVisible,
       setSearchIconVisible
    }
         
  
    useEffect(()=>{
        getProductData()
    },[])


     useEffect(()=>{
       if(!token && localStorage.getItem("token")){
        setToken(localStorage.getItem("token"))
        getUserCart(localStorage.getItem("token"))
       }   
     },[]) 

      
    useEffect(()=>{
      const path = loc.pathname

      if(path==='/' || path==='/collection')
      setSearchIconVisible(true)
      else
      setSearchIconVisible(false)

    },[loc]) 

    return (
        <ShopContext.Provider value={value}>
         {children}
        </ShopContext.Provider>
    )
}