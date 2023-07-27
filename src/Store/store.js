import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      cartnum: 0,
      cartItems: [],
      addToCart: (product) =>
        set((state) => ({
          cartnum: state.cartnum + 1,
          cartItems: [product, ...state.cartItems],
        })),
      removeFromCart: (productId) =>
        set((state) => ({
          cartnum: state.cartnum - 1,
          cartItems: state.cartItems.filter((c) => c.id !== productId),
        })),
      clearCart: () =>
        set(() => ({
          cartnum: 0,
          cartItems: [],
        })),
      addMoreQuantity: (productId, quantity) =>
        set((state) => ({
          cartItems: state.cartItems.map((c) => {
            // console.log(quantity);
            if (c.id === productId) {
              let unitPrice = c.price / c.Quantity;
              c.price = Math.floor(quantity * unitPrice);
              c.Quantity = quantity;
              // console.log(c.Quantity);
              // console.log(c.price);
              return c;
            } else {
              return c;
            }
          }),
        })),
    }),
    {
      name: "Cart", // name of the item in the storage (must be unique)
      // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

// export const
