'use client';
import { useState } from 'react';
import React from 'react';
import Modal from '../UI/modal';
import ProductItem from '@/screens/product-item';

export default function ProductsInfo({images, alt, price, title, itm}) {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  }
  return (
    <>
    <Modal open={openModal === true} onClose={() => setOpenModal(false)}  >
    <ProductItem items={itm} />

    </Modal>
    <div className= 'product-info' onClick={handleOpenModal}>
      <img src={images} alt={alt}  />
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
    </>

  )
}
