import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const ProductList = (props) => {
  return (
    <Link to={`/products/${props.data.id}`} className="col-4">
      <div className="mb-3">
        <div className="w-100 mb-4px img-file">
          <img src={props.data.image} alt={props.data.name} className="w-100" />
        </div>
        <div className="text">
          <div className="description mb-4px">
            <p className="mb-0">{props.data.description}</p>
          </div>
          <div className="price mb-4px">
            <p className="mb-0">{props.data.price}</p>
          </div>
          <div className="stock mb-4px">
            <p className="mb-0"> MOQ {props.data.stock} (pieces)</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductList;
