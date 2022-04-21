import React from "react";

import classes from "./Search.module.css";

import searchImage from "../../../images/search-icon.svg";

const Search = () => {
  return (
    <section className={classes.search}>
      <div>
        <input type="text" placeholder="Search ..." />
      </div>
      {/* SEARCH ICON */}
      <div className={classes["search-icon"]}>
        <img src={searchImage} />
      </div>
    </section>
  );
};

export default Search;
