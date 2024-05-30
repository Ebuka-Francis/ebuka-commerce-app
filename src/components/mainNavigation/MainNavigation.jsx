import Link from "next/link";
import "./MainNavigation.css";
import PageNav from "./PageNav";
import Logo from "../UI/logo/Logo";


const MainNavigation = () => {
  return (
    <div className="topnav">
    <nav>
     <PageNav />
     <Logo />
      <div className="profile-nav">
      
        <Link href='/login'>Login</Link>
        {/* <Link href='#'><img src='/cartimg.png' alt="cartimages" /></Link> */}
        {/* <Link href='#'><img src='/profileimg.png' alt="cartimages" /></Link> */}
      </div>
    </nav>
    </div>
  )
}   

export default MainNavigation;
