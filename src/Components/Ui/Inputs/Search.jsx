import React from "react";

import classes from "./Search.module.css";

const Search = () => {
  return (
    <section className={classes.search}>
      <div>
        <input type="text" placeholder="Search ..." />
      </div>
      {/* SEARCH ICON */}
      <div className={classes["search-icon"]}>
        <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" />
      </div>
    </section>
  );
};

export default Search;
