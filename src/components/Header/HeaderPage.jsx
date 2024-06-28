"use client"
import React from 'react';
import { useEffect } from 'react';
import "./HeaderPage.css";
import Headerimg from './Headerimg';
import Logo from '../UI/logo/Logo';
import useStore from '@/store/cartContext';
// import CartItems from '../cart/cartitem';
// import { PRODUCTS } from '@/data/Data';

export default function HeaderPage() {
  // const carts = useStore(state=>state.cartItems)
  // const setCartItems = useStore(state=>state.setCartItems)
  // console.log("CArt tmessdsfdsfdsfsffds>>>>>>>>>>>>", carts)
  
  // useEffect(()=>{
  //   setCartItems([])
  // },[])
  return (
    
  <header>
    <div className="container">
      <div className="container-one">
      <Headerimg images='/headerimg-1.png' />
      <Headerimg images='/headerimg-2.png' />
      </div>
      <div>
      <p>welcome to</p>
     <Logo />
     <p>Fashion</p>
      </div>
      <div className="container-one">
      <Headerimg images='/headerimg-3.png' />
      <Headerimg images='/headerimg-4.png' />
      </div>
    </div>
  </header>

  
  )
}
