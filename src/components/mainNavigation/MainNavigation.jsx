// import React from 'react';
import Link from "next/link";
// import cartImg from '../../../public/cartimages.png';
import "./MainNavigation.css";
import PageNav from "./PageNav";
import Logo from "../UI/logo/Logo";


const MainNavigation = () => {
  return (
    <nav>
     <PageNav />
     <Logo />
      {/* <div className="logo">Topibro</div> */}
      <div className="profile-nav">
        <Link href='#'>Signup</Link>
        <Link href='#'>Log in</Link>
        {/* <Link href='#'><img src='/cartimg.png' alt="cartimages" /></Link> */}
        {/* <Link href='#'><img src='/profileimg.png' alt="cartimages" /></Link> */}
      </div>
    </nav>
  )
}   

export default MainNavigation;
