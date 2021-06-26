import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./style.scss";

const CartItem = ({ cart }) => {
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(false);
  return (
    <div className="bg-white my-container px-3 py-2 mb-3">
      <div className="d-flex">
        <div className="cart-img">
          <Link to={`/products/${cart.id}`}>
            <img src={cart.image} alt={cart.name} className="w-100 h-100" />
          </Link>
        </div>
        <div className="cart-text-detail">
          <p className="mb-0">
            <Link to={`/products/${cart.id}`}>{cart.name}</Link>
          </p>
          <p className="mb-0 cart-price">
            <Link to={`/products/${cart.id}`}>{cart.price}</Link>
          </p>
        </div>
      </div>
      <div className="cart-btn mt-3">
        <div className="d-flex justify-content-between h-100">
          <div className="d-flex h-100 align-items-center">
            <button
              className="btn delete-btn"
              onClick={() =>
                dispatch({ type: "REMOVE_CART_ITEM", payload: cart })
              }
            >
              <i className="material-icons"> delete</i> Delete
            </button>
          </div>
          <div className="d-flex quantity-btn h-100 align-items-center">
            <button
              onClick={() => {
                if (cart.quantity <= cart.stock) {
                  setDisable(false);
                  dispatch({ type: "REDUCE_CART_ITEM", payload: cart });
                }
              }}
            >
              <span className="material-icons">remove</span>
            </button>
            <p className="mx-2 mb-0"> {cart.quantity}</p>
            <button
              disabled={disable}
              onClick={() => {
                if (disable === false) {
                  dispatch({ type: "ADD_TO_CART", payload: cart });
                  if (cart.quantity + 1 >= cart.stock) {
                    setDisable(true);
                  }
                }
              }}
            >
              <span className="material-icons">add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
