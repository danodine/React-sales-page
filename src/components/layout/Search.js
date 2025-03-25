import React, { useState } from "react";
import logo from "../../imagenes/search.png";
import { Link } from "react-router-dom";
import classes from "./Search.module.css";

const Search = (props) => {
  const [searchData, setSearchData] = useState("");

  const onSearchHandeler = (event) => {
    setSearchData((event.target.value).toLowerCase());
  };

  console.log(searchData);

  const onSubmitHandeler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.control}>
      <input
        onChange={onSearchHandeler}
        value={searchData}
        type="text"
        placeholder="Buscar.."
      />
      <button onClick={onSubmitHandeler}>
        <Link to={`/busqueda/${searchData}`}>
          <img src={logo} alt="Buscar" />
        </Link>
      </button>
    </div>
  );
};

export default Search;
