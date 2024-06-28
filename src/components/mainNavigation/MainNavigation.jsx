"use client";
import Link from "next/link";
import "./MainNavigation.css";
import PageNav from "./PageNav";
import Logo from "../UI/logo/Logo";
import useStore from "@/store/cartContext";
import { useState } from "react";
// import CartModal from "../cart-folder/cartModal";


const MainNavigation = () => {
  const cartnumb = useStore(state => state.cartNumb);
  const [openCartModal, setOpenCartModal] = useState(false);


  const handleCartModal = () => {
    setOpenCartModal(true)
  }
  console.log('cart number', cartnumb())
  return (
    <>
    <div className="topnav">
    <nav>
     <PageNav />
     <Logo />
      <div className="profile-nav">
      
        <Link href='/login'>Login</Link>
        <Link href='/cart-page' ><img src='/cartimg.png' alt="cartimages" />{cartnumb()}</Link>
        {/* <Link href='#'><img src='/profileimg.png' alt="cartimages" /></Link> */}
      </div>
    </nav>
    </div>
   {/* <CartModal onOpen={openCartModal === true} onClose={() => setOpenCartModal(false)} /> */}
    </>
  )
}   

export default MainNavigation;
