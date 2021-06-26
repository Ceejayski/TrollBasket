import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <footer>
      <nav className="d-flex justify-content-between h-100 w-85">
        <div className="footer-link w-20 pt-3">
          <a href="/">
            <div>
              <span className="material-icons-outlined">home</span>
            </div>
            <p className="mb-0">Home</p>
          </a>
        </div>
        <div className="footer-link w-20 active  pt-3">
          <a href="/">
            <div>
              <span className="material-icons-outlined">shopping_cart</span>
            </div>
            <p className="mb-0">Buy</p>
          </a>
        </div>
        <div className="footer-link w-20  pt-3">
          <a href="/">
            <div>
              <span className="material-icons-outlined">sell</span>
            </div>
            <p className="mb-0">Deals</p>
          </a>
        </div>
        <div className="footer-link w-20  pt-3">
          <a href="/">
            <div>
              <span className="material-icons-outlined">
                account_balance_wallet
              </span>
            </div>
            <p className="mb-0">Wallet</p>
          </a>
        </div>
        <div className="footer-link w-20  pt-3">
          <a href="/">
            <div>
              <span className="material-icons-outlined">menu</span>
            </div>
            <p className="mb-0">More</p>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
