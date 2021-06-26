import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="checkout-body">
      <div className="darkblue-circle">
        <div className="green-circle">
          <span className="material-icons">check</span>
        </div>
      </div>

      <p className="text-center text-white mt-4 first-text mb-2">
        Checkout Succesful
      </p>
      <p className="text-center scnd-text text-white ">
        Your checkout is now successful.
      </p>
      <div className="got it text-blue">
        <Link to="/" className="btn btn-light got-it d-block">
          Got It
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
