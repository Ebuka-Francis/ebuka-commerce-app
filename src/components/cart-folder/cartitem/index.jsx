"use client";
import React, { useState } from "react";
import useStore from "@/store/cartContext";
import "./cartItems.css";
// import './Footer.css';

export default function CartItems({ items }) {
  const deleteCart = useStore((state) => state.deleteCart);
  const addQunatity = useStore((state) => state.addToCart);

  const [count, setCount] = useState(0);

  //  const handleAddToQuantity = () => {
  //   addToQuantity(items.id);
  //  }
  // console.log("itemQuantity", itemQuantity);

  // const handleIncreaseQuantity = () => {
  //   const productItem = [...items];
  //   const existingQuantity = items.findIndex((item) => item.id === product.id);
  //   let productItems = productItem[existingQuantity];
  //   productItems = { ...productItems, qauntity: productItems.qauntity + 1 };
  //   productItem[existingQuantity] = productItems;
  //   return { productItem };
  // };


  console.log("items qusntity", items.qauntity);

  return (
    <div className="cart-container">
      <div className="cart">
        <div className="cart-grup">
          <div className="cart-image">
            <img src={items.image} alt={items.alt} />
            <p>{items.title}</p>
          </div>
          <div>
            <p>NGN {items.price}</p>
          </div>
        </div>
        <div className="cart-grup2">
          <div className="cart-remove">
            <img
              src="/delete-img-removebg-preview.png"
              alt="delete images "
              onClick={() => deleteCart(items)}
              style={{ cursor: "pointer" }}
            />
            <p>Remove</p>
          </div>
          <div className="increase-quantity">
            <button className="btn" onClick={() => deleteCart(items)}>
              {" "}
              <img src="/minus-img.png" alt="minus images" />{" "}
            </button>
            <p>{items.qauntity}</p>
            <button className="btn" onClick={() => addQunatity(items)}>
              {" "}
              <img src="/plus-img.png" alt="" />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
