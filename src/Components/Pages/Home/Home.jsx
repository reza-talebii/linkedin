import React from "react";
import { Link } from "react-router-dom";

import homeLogo from "../../../images/home-logo.svg";

import classes from "./Home.module.css";

import Search from "../../Ui/Inputs/Search";

const Home = () => {
  return (
    <section className={classes.container}>
      <section className={classes.content}>
        <span className={classes.logo}>
          <Link to="/">
            <img src={homeLogo} alt="logo" />
          </Link>
        </span>
        <Search />
      </section>
    </section>
  );
};

export default Home;
