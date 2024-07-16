"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import toast from "react-hot-toast";

const useStore = create(
  persist(
    (set, get) => ({
      cartItems: [],
      quauntity: 0,
      addToQuantity: (state) =>  {
        const { cartItems } = get();
     const items =  [...state.cartItems];
     const taskIndex = items.findIndex((count) => count.id === id);
     let countNumber = items[taskIndex];
     countNumber = {...countNumber, }

      },
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
    //  toast.success('Product successfully added to cart')
      },

      deleteCart: (product) =>
        set((state) => ({
          cartItems: state.cartItems ? state.cartItems
            .map((item) => {
              if (item.id === product.id) {
                return { ...item, quantity: item.quantity - 1 };
              }
              return item;
            })
            .filter((item) => item.quantity > 0):[],
        })),

      // deleteCart: (product) => {
      //   const { cartItems } = get();
      //   const updatedCart = removeCart(product, cartItems);
      //   set({ cartItems: updatedCart });
      // },
      clearAllCart: () => set({ cartItems: [] }),
    }),
    {
      name: "food-storage",
    }
  )
);

function updateCart(product, cart) {
  const cartItem = { ...product };

  const productOnCart = cart.map((item) => item.id).includes(product.id);

  if (!productOnCart) cart.push(cartItem);
  else {
    return cart.map((item) => {
      if (item.id === product.id)
        return { ...item,  qauntity: item.qauntity + 1};
      return item;
    });
  }

  return cart;
}


// function removeCart(product, cart) {
//   return cart
//     .map((item) => {
//       if (item.id === product.id)
//         return { ...item, qauntity: item.qauntity - 1 };
//       return item;
//     })
//     .filter((item) => {
//       return item.qauntity;
//     });
// }

function removeCart(product, cart) {
  return cart
    .map((item) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    })
    .filter((item) => item.quantity > 0 ); // Ensuring only items with quantity > 0 are kept
}

export default useStore;
