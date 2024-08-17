import "./cartsum.css";
import { useState } from "react";
import useStore from "@/store/cartContext";

const formatNaira = (value) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(value);
};

export default function CartSummary({ itemSummary }) {
  const setSaveCatitem = useStore((state) => state.saveCartItem);
  const cartItem = useStore((state) => state.cartItems);
  const clearCart = useStore((state)=> state.clearAllCart);
  const [carts, setCarts] = useState([]);
  



  const handleSave = () => {
    setSaveCatitem()
  };


  
  const handleSummary = () => {
    if (itemSummary && itemSummary.length > 0) {
      const sum = itemSummary
        .map((item) => item.qauntity * item.price)
        .reduce((prev, curr) => prev + curr);
      return sum;
    }
  };
 

  return (
    <div className="cart-sum">
      <h2>cart summary</h2>
      <div className="cart-sum-total">
        <p>Item Total ({itemSummary.length})</p>
        <p>NGN 1000</p>
      </div>
      <div className="cart-sum-total">
        <p>sub total</p>

        <p>{formatNaira(handleSummary())}</p>
      </div>
      <div className="checkout-btn">
        <button onClick={handleSave}>
          {" "}
          Check out(NGN {formatNaira(handleSummary())})
        </button>
        <button onClick={clearCart}>clear cart</button>
      </div>
    </div>
  );
}


