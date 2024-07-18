"use client";
import Link from "next/link";
import "./MainNavigation.css";
import PageNav from "./PageNav";
import Logo from "../UI/logo/Logo";
import useStore from "@/store/cartContext";
import useAuth from "@/auth";
import { useState } from "react";
import { auth } from "@/services/firebase";
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";



export default function  MainNavigation () {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleLogout = async () => {
    setError(null);
    try {
      await signOut(auth);
      toast.success('successfully logged out ')
    } catch (err) {
      setError(err.message);
    }
  router.push('/')
  }

  const user = useAuth();
  const cartnumb = useStore(state => state.cartItems);

  console.log('cart number',cartnumb.length )
  return (
    <>
    <div className="topnav">
    <nav>
     <PageNav />
     <Logo />
      <div className="profile-nav">
        {
          user ?
          <><Link href='/cart-page'><img src='/cartimg.png' alt="cartimages" />{cartnumb.length}
          </Link><Link className="profilelink" href='#'><img src='/profileimg.png' alt="cartimages" /></Link>
          <button style={{color: 'red'}} onClick={handleLogout} >logout</button>
          </> 
          :
        <Link href='/login'>Login</Link> 
        }
      </div>
    </nav>
    </div>
   {/* <CartModal onOpen={openCartModal === true} onClose={() => setOpenCartModal(false)} /> */}
    </>
  )
}   

