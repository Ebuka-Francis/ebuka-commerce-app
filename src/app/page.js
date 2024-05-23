// import Image from "next/image";
// import styles from "./page.module.css";

import Footer from "@/components/Footer/Footer";
import HeaderPage from "@/components/Header/HeaderPage";
import MainNavigation from "@/components/mainNavigation/MainNavigation";
import Products from "@/components/Products/Products";

export default function Home() {
  return (
    <>
    <MainNavigation />
    <HeaderPage />
    <Products />
    <Footer />
    </>
  );
}
