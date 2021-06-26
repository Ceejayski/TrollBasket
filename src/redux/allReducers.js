import { combineReducers } from "redux";
import cartReducer from "./Cart/cart.reducer";
import productReducer from "./product/product.reducer";

const rootReducer = combineReducers({
  cartData: cartReducer,
  productList: productReducer,
});

export default rootReducer;
