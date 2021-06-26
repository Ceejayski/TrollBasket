import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Header";
import CartItem from "./cartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartData.cartItems);
  const totalAmount =
    cart.length > 1
      ? cart
          .reduce((x, y) => {
            let yPrice = parseFloat(y.price.split("$").join(""));
            return x + yPrice * y.quantity;
          }, 0)
          .toFixed(2)
      : cart.length === 0
      ? 0
      : (
          parseFloat(cart[0].price.split("$").join("")) * cart[0].quantity
        ).toFixed(2);
  return (
    <div>
      <Header title="Carts" />
      <div className="cart-maindiv  pt-3 pb-2 bg-grey">
        {cart.map((cart, key) => {
          return <CartItem cart={cart} key={key} />;
        })}
      </div>

      <div className="my-container pt-3">
        <div className="d-flex justify-content-between">
          <p className="mb-0">Subtotal</p>
          <p className="mb-0">${totalAmount}</p>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <p className="mb-0">Total</p>
          <p className="mb-0">${totalAmount}</p>
        </div>
        <div className="text-white">
          <Link
            to="/checkout"
            className="btn btn-primary mt-3 btn-block btn-font py-2"
            onClick={() => dispatch({ type: "CLEAR_CART" })}
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
