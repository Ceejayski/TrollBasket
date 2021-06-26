import productTypes from "./product.types";
import { reduceStocks } from "./product.utils";
import JSONDATA from "../../data/endpoint.json";

const INITIAL_STATE = {
  products: JSONDATA,
};

const productReducer = (state = INITIAL_STATE, action) => {
  if (action.type === productTypes.REDUCE_PRODUCT_STOCKS) {
    return {
      ...state,
      cartItems: reduceStocks({
        prevProductItems: state.product,
        nextProductItem: action.payload,
      }),
    };
  } else {
    return state;
  }
};
export default productReducer;
