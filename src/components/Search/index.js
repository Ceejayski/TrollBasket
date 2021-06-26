import React from "react";
import SearchInput from "../SearchInput";
import SelectOption from "../SelectOption";
import "./style.scss";

const Search = (props) => {
  return (
    <div className="mb-4 w-100">
      <p className="title mb-1 mt-2">Trollbasket</p>
      <SelectOption onselect={props.onselect} />
      <SearchInput onchange={props.onInput} />
    </div>
  );
};

export default Search;
