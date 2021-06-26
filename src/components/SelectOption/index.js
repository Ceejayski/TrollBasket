import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.scss";

const SelectOption = (props) => {
  const locations = ["All", "Lagos", "Abuja", "Ibadan", "Onitsha", "Asaba"];
  const cart = useSelector((state) => state.cartData.cartItems);
  return (
    <div className="d-flex main-div justify-content-between px-1 mb-3">
      <div className="d-flex select-div">
        <div className="icon-div me-1">
          <span className="material-icons">place</span>
        </div>
        <select name="location" id="location" onChange={props.onselect}>
          {locations.map((location, key) => {
            return (
              <option value={location} key={key} className="pl-4">
                {location}{" "}
              </option>
            );
          })}
        </select>
      </div>
      <div className="order-link d-flex">
        <div className="icon-div">
          <span className="material-icons">shopping_basket</span>
        </div>
        <p className="ps-2 mb-0">Orders</p>
      </div>
      <div className="position-relative">
        <Link to="/cart" className="d-flex align-items-center shopping-cart">
          <div className="icon-div">
            <span className="material-icons">shopping_cart</span>
          </div>
          <div className="cart-item d-flex justify-content-center align-items-center">
            <p className="mb-0"> {cart.length} </p>
          </div>
          <p className="ps-2 mb-0">Cart</p>
        </Link>
      </div>
    </div>
  );
};

export default SelectOption;
