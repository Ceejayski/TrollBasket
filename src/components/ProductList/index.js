import React, { useState } from "react";
import ProductItem from "../ProductItem";
import { useSelector } from "react-redux";
import Search from "../Search";
import Carousel from "../Carousel";
import "./style.scss";

const ProductList = () => {
  // constructor(props) {
  //   super(props);

  // this.data = useSelector( state => state.productList.products)
  // }
  const [searchTerm, setSearchTerm] = useState("");
  const [searchLocation, setSearchLocation] = useState("All");
  const data = useSelector((state) => state.productList.products);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelect = (e) => {
    setSearchLocation(e.target.value);
  };
  return (
    <React.Fragment>
      <div className="my-container">
        <Search onInput={handleSearch} onselect={handleSelect} />
      </div>
      <Carousel />
      <div className="my-container">
        <div className="row">
          {data
            // eslint-disable-next-line array-callback-return
            .filter((val) => {
              if (searchTerm === "" && searchLocation === "All") {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                searchLocation === "All"
              ) {
                return val;
              } else if (
                val.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                searchLocation === val.location
              ) {
                return val;
              } else if (searchTerm === "" && searchLocation === "All") {
                return val;
              }
            })
            .map((val, key) => {
              return <ProductItem data={val} key={key} />;
            })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductList;
