import React from "react";
import "./style.scss";

const SearchInput = (props) => {
  return (
    <div className="position-relative w-100">
      <input
        type="text"
        className="form-control search-form w-100"
        placeholder="Search merchbuy"
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
        onChange={props.onchange}
      />
      <span className="material-icons position-absolute new-search">
        search
      </span>
    </div>
  );
};

export default SearchInput;
