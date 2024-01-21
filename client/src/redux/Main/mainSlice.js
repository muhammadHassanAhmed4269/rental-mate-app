import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  userID: "",
  category: "Electronics",
  cart: [],
  cartPrice: null,
  wishlist: [],
  productDescription: {},
};
const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
    storeUserID: (state, action) => {
      state.userID = action.payload;
    },
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    addToWishlist: (state, action) => {
      state.wishlist = [...state.wishlist, action.payload];
    },
    deleteFromCart: (state, action) => {
      state.cart = [
        ...state.cart.filter((item, index) => index !== action.payload),
      ];
    },
    deleteFromWishlist: (state, action) => {
      state.wishlist = [
        ...state.wishlist.filter((item, index) => index !== action.payload),
      ];
    },
    deleteWholeCart: (state, action) => {
      state.cart = [];
    },
    calculateCartPrice: (state, action) => {
      if (state.cart.length > 0) {
        let price = 0;
        state.cart.forEach((elem) => {
          price += elem.price;
        });
        state.cartPrice = price;
      } else {
        state.cartPrice = 0;
      }
    },
    moveAllToCart: (state, action) => {
      state.cart = [...state.cart, ...state.wishlist];
    },
    productDescription: (state, action) => {
      state.productDescription = action.payload;
    },
  },
});
export const {
  changeCategory,
  productDescription,
  storeUserID,
  addToCart,
  deleteFromCart,
  deleteFromWishlist,
  deleteWholeCart,
  calculateCartPrice,
  addToWishlist,
  moveAllToCart,
} = mainSlice.actions;
export default mainSlice.reducer;
