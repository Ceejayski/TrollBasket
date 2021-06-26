import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { findProduct } from "../../redux/product/product.utils";
import { addProduct } from "../../redux/Cart/cart.actions";
import Alert from "react-bootstrap/Alert";
import Header from "../Header";
import "./style.scss";

const ProductDetail = (props) => {
  const [showAlert, setShowAlert] = useState(false);
  const productList = useSelector((state) => state.productList.products);
  const cart = useSelector((state) => state.cartData.cartItems);
  const { id } = useParams();
  const productID = { id: parseFloat(id, 10) };
  const product = findProduct({ productlist: productList, product: productID });
  const cartAction = addProduct(product);
  const dispatch = useDispatch();

  return (
    <div>
      <Header title="Details" />
      <div className=" bg-grey">
        <div className="my-container py-3">
          <div className=" img-file-details position-relative">
            {showAlert && (
              <div className="position-absolute alert-div">
                <Alert
                  variant="success"
                  onClose={() => setShowAlert(false)}
                  dismissible
                >
                  <p className="mb-0">Item added to cart successfully</p>
                </Alert>
              </div>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="w-100 h-100"
            />
          </div>
        </div>
      </div>
      <div className="text-details my-container pt-2">
        <div className="product-name">{product.name}</div>
        <div className="description-details  mb-4px">
          <p className="mb-0">{product.description}</p>
        </div>
        <div className="price-details mb-4px">
          <p className="mb-0">
            {product.price}
            <span>/Piece</span>{" "}
          </p>
        </div>
      </div>
      <div className="product-desc-link py-2 ">
        <div className="my-container d-flex justify-content-between">
          <p className="mb-0">Product Description</p>
          <p className="mb-0">
            <span className="material-icons-outlined">chevron_right</span>
          </p>
        </div>
      </div>
      <div className="my-container mt-2">
        <div className="d-flex justify-content-between">
          <p className="mb-0">Review and Ratings</p>
          <p className="mb-0">
            <a href="/" className="real-link">
              View All
            </a>
          </p>
        </div>
        <div className="d-flex align-items-center mt-2">
          <p className="review-star">
            <span className="material-icons-outlined">star_purple500</span>
            <span className="material-icons-outlined">star_purple500</span>
            <span className="material-icons-outlined">star_purple500</span>
            <span className="material-icons-outlined">star_outline</span>
            <span className="material-icons-outlined">star_outline</span>
          </p>
          <p className="rating ms-2"> 3.0</p>
        </div>
        <p className="review-text-desc">
          Get comfy and comfortable with the new 2019 designer sneaker for all
          your events
        </p>
        <p className="reviewer">Segun Arinze</p>
      </div>
      <footer className="">
        <div className="my-container d-flex justify-content-between align-items-center h-100">
          <button
            className="btn btn-primary w-48"
            onClick={() => {
              dispatch(cartAction);
              setShowAlert(true);
            }}
          >
            Add to cart
          </button>
          <button className="btn btn-outline-secondary w-48"> Wishlist</button>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetail;
