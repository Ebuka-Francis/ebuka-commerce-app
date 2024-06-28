import React, { useState } from 'react';
import useStore from '@/store/cartContext';
import './cartItems.css';
// import './Footer.css';



export default function CartItems({items}) {
 const deleteCart = useStore(state=> state.deleteCart);
 const itemQuantity = useStore(state=> state.quauntity);
 const addToQuantity = useStore(state=> state.addToQuantity);
 const reduceQuantity = useStore(state=> state.reduceQuantity);
 const addQunatity = useStore(state=> state.addToCart);



//  const handleAddToQuantity = () => {
//   addToQuantity(items.id);
//  }
 console.log('itemQuantity', itemQuantity);

 const handleIncreaseQuantity = () => {

 }

  return (
  <div className='cart-container' >
    <div className='cart'>
      <div className="cart-grup">
      <div className='cart-image'>
    <img src={items.image} alt={items.alt} />
    <p>{items.title}</p>
      </div>
      <div>
    <p>NGN {items.price}</p>
      </div>
      </div>
     <div className='cart-grup2'  >
     <div className='cart-remove' >
      <img src="/delete-img-removebg-preview.png" alt="delete images "  onClick={() => deleteCart(items)} style={{cursor: 'pointer'}}  />
     <p>Remove</p>
     </div>
     <div className='increase-quantity'>
      <button className='btn' onClick={() => reduceQuantity(items.id)}> <img src="/minus-img.png" alt="minus images" /> </button>
      <p>{itemQuantity}</p>
      <button className='btn' onClick={() => addToQuantity(items.id)} > <img src="/plus-img.png" alt="" /> </button>   
     </div>
     </div>
    </div>
  </div>
  )
}
