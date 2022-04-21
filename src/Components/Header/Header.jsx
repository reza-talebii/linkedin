import React from "react";

import { Link } from "react-router-dom";

import { homeLogo } from "../../images";

import classes from "./Header.module.css";

import { Search, Navbar } from "../";

const Header = () => {
  return (
    <section className={classes.container}>
      <section className={classes.content}>
        <span className={classes.logo}>
          <Link to="/">
            <img src={homeLogo} alt="logo" />
          </Link>
        </span>
        <Search />
        <Navbar />
      </section>
    </section>
  );
};

export default Header;
