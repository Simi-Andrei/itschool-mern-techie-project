import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import productReducer from "../features/product/productSlice";
import cartReducer from "../features/cart/cartSlice";
import orderReducer from "../features/order/orderSlice";
import favoritesReducer from "../features/favorites/favoritesSlice";
import reviewReducer from "../features/reviews/reviewSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
    order: orderReducer,
    favorites: favoritesReducer,
    review: reviewReducer,
  },
});

export default store;
