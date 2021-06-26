import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";

const Header = (props) => {
  let history = useHistory();
  const cart = useSelector((state) => state.cartData.cartItems);
  return (
    <div className="my-container mt-3 pb-3">
      <div className="row">
        <div className="col-4">
          <button className="back-btn" onClick={() => history.goBack()}>
            <span className="material-icons-outlined">chevron_left</span>
          </button>
        </div>
        <div className="col-4 text-center">
          <p className="mb-0">{props.title}</p>
        </div>
        {props.title === "Details" && (
          <div className="col-4 d-flex justify-content-end">
            <div className="icon-div mx-2">
              <span className="material-icons-outlined">search</span>
            </div>
            <div className="position-relative">
              <Link
                to="/cart"
                className="d-flex align-items-center shopping-cart"
              >
                <div className="icon-div">
                  <span className="material-icons">shopping_cart</span>
                </div>
                <div className="cart-item d-flex justify-content-center align-items-center">
                  <p className="mb-0"> {cart.length} </p>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
