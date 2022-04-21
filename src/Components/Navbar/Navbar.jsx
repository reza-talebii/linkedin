import React from "react";

import classes from "./Navbar.module.css";

import navHomeImg from "../../images/nav-home.svg";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__wrap}>
        <li className={classes.nav__list}>
          <a>
            <img src={navHomeImg} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
