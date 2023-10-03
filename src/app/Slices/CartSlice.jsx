import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: { cart: [], amount: 0, totalAmount: 0, totalPrice: 0 },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      try {
        const exist = state.cart.find(
          (el) =>
            el.id === product.id &&
            el.size === product.size &&
            el.color === product.color
        );
        if (exist) {
          exist.amount++;
          exist.totalPrice += product.price;
          state.totalAmount++;
          state.totalPrice += product.price;
        } else {
          state.cart.push({
            id: product.id,
            price: product.price,
            size: product.size,
            amount: 1,
            img: product.img,
            totalPrice: product.price,
            name: product.name,
            text: product.text,
            color: product.color,
          });
          state.totalAmount++;
          state.totalPrice += product.price;
        }
      } catch (e) {
        return e.massage();
      }
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      try {
        const exist = state.cart.find(
          (el) =>
            el.id === product.id &&
            el.size === product.size &&
            el.color === product.color
        );
        if (exist.amount === 1) {
          state.cart = state.cart.filter(
            (el) =>
              el.id !== product.id ||
              el.size !== product.size ||
              el.color !== product.color
          );
          state.totalAmount--;
          state.totalPrice -= product.price;
        } else {
          exist.amount--;
          exist.totalPrice -= product.price;
          state.totalAmount--;
          state.totalPrice -= product.price;
        }
      } catch (e) {
        return e.massage();
      }
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
