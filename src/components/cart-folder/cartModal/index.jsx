"use client"
import Modal from "@/components/UI/modal";
import React from "react";
import CartItems from "../cartitem";
import useStore from "@/store/cartContext";
import './cartModal.css';
import CartSummary from "../cart-summary";


export default function CartModal({onOpen, onClose, products}) {
  const cart = useStore(state=> state.cartItems);
  const cartNumber = useStore(state=> state.cartNumb);
  console.log("cartpage iiiiii", cart);




  //  setCartProduct() 

  return (
    <div className="cart-container">
      <div className="carts" >
  <h3>Cart({cartNumber()}) </h3>
    {/* <Modal open={onOpen} onClose={onClose}> */}
      {cart.map((item, idx) => (
        <CartItems
        key={idx}
       items={item}
        />
      ))}
      </div>
      <CartSummary/>

    {/* </Modal> */}
    </div>
  );
}
