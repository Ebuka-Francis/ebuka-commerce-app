"use client";
import { useState } from "react";
import Link from "next/link";
import { PRODUCTSGEN } from "@/data/Data";
import ProductsInfo from "@/components/Products/ProductsInfo";
import "./ProductPage.css";
import Modal from "@/components/UI/modal";

export default function ProductPage() {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(true);
  };

  return (
    <>
      <Modal open={openModal === true} onClose={() => setOpenModal(false)}>
        <h1>modal</h1>
      </Modal>
      <div className="products">
        <div className="product-page">
          <h2>Our Products</h2>
          <Link href="/">Go Back</Link>
        </div>
        <div className="prods" onClick={handleModal}>
          {PRODUCTSGEN.map((item) => (
            <ProductsInfo
              action={handleModal}
              images={item.image}
              title={item.title}
              price={item.price}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
