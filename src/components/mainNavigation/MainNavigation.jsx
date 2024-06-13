"use client";
import Link from "next/link";
import "./MainNavigation.css";
import PageNav from "./PageNav";
import Logo from "../UI/logo/Logo";
import useStore from "@/store/cartContext";


const MainNavigation = () => {
  const cartnumb = useStore((state) => state.bears)
  return (
    <div className="topnav">
    <nav>
     <PageNav />
     <Logo />
      <div className="profile-nav">
      
        <Link href='/login'>Login</Link>
        <Link href='#'><img src='/cartimg.png' alt="cartimages" />{cartnumb}</Link>
        {/* <Link href='#'><img src='/profileimg.png' alt="cartimages" /></Link> */}
      </div>
    </nav>
    </div>
  )
}   

export default MainNavigation;
