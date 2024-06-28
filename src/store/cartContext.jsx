"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import toast from "react-hot-toast";

const useStore = create(
  persist(
    (set, get) => ({
      cartItems: [],
      quauntity: 0,
      addToQuantity: () => set((state) => ({quauntity: state.quauntity + 1})),
      reduceQuantity: () => set((state) => ({ quauntity: state.quauntity - 1 })),
      // setCartItems:()=>set((state)=>({cartItems:[...state.cartItems]})),
      cartNumb: () => {
        const { cartItems } = get();
        if (cartItems.length)
          return cartItems
            .map((item) => item.cartNumb)
            .reduce((prev, curr) => prev + curr);
        return 0
      },

      addToCart: (product) => {
        const { cartItems } = get();
        const updatedCart = updateCart(product, cartItems);
        set({ cartItems: updatedCart });
     toast.success('Product successfully added to cart')
      },
      deleteCart: (product) => {
        const { cartItems } = get();
        const updatedCart = removeCart(product, cartItems);
        set({ cartItems: updatedCart });
      },
      clearAllCart: () => set({ cartItems: [] }),
    }),
    {
      name: "food-storage",
    }
  )
);

function updateCart(product, cart) {
  const cartItem = { ...product, cartNumb: 1 };

  const productOnCart = cart.map((item) => item.id).includes(product.id);

  if (!productOnCart) cart.push(cartItem);
  else {
    return cart.map((item) => {
      if (item.id === product.id)
        return { ...item, cartNumb: item.cartNumb + 1, quauntity: item.quauntity + 1};
      return item;
    });
  }

  return cart;
}

function removeCart(product, cart) {
  return cart
    .map((item) => {
      if (item.id === product.id)
        return { ...item, cartNumb: item.cartNumb - 1 };
      return item;
    })
    .filter((item) => {
      return item.cartNumb;
    });
}
export default useStore;
