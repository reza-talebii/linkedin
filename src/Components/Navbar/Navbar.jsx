import React from "react";

import classes from "./Navbar.module.css";

import navHomeImg from "../../images/nav-home.svg";
import navNetworkImg from "../../images/nav-network.svg";
import navJobsImg from "../../images/nav-jobs.svg";
import navMessagingImg from "../../images/nav-messaging.svg";
import navNotificationImg from "../../images/nav-notifications.svg";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__wrap}>
        <li className={`${classes.nav__list} ${classes.active}`}>
          <a>
            <img src={navHomeImg} />
            <span>Home</span>
          </a>
        </li>
        <li className={classes.nav__list}>
          <a>
            <img src={navNetworkImg} />
            <span>Network</span>
          </a>
        </li>
        <li className={classes.nav__list}>
          <a>
            <img src={navJobsImg} />
            <span>Messaging</span>
          </a>
        </li>
        <li className={classes.nav__list}>
          <a>
            <img src={navNotificationImg} />
            <span>Notifications</span>
          </a>
        </li>
        <li className={classes.nav__list}>
          <a>
            <img src={navMessagingImg} />
            <span>Messaging</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
