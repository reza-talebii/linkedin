import React from "react";

import classes from "./Navbar.module.css";

import {
  userIcon,
  workIcon,
  downIcon,
  navHomeImg,
  navNetworkImg,
  navJobsImg,
  navMessagingImg,
  navNotificationImg,
} from "../../images";

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

        <section className={classes.user}>
          <a>
            <img src={userIcon} />
            <span>Me</span>
            <img src={downIcon} />
          </a>
        </section>

        <section className={classes.work}>
          <a>
            <img src={workIcon} />
            <span>
              Work
              <img src={downIcon} />
            </span>
          </a>
        </section>
      </ul>
    </nav>
  );
};

export default Navbar;
