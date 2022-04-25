import React from "react";

import classes from "./Navbar.module.css";

import { useNavigate } from "react-router-dom";

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

import { useDispatch, useSelector } from "react-redux";

import { signout } from "../../store/Auth/AuthThunk";

const Navbar = () => {
  const user = useSelector((state) => JSON.parse(state.auth.user));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //SIGN OUT HANDLER
  const signOutHandler = () => dispatch(signout()).then(() => navigate("/"));

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
            <img src={user?.photoURL || userIcon} />
            <span> Me </span>
            <img src={downIcon} />
          </a>

          <section className={classes.signOut} onClick={signOutHandler}>
            SignOut
          </section>
        </section>

        
      </ul>
    </nav>
  );
};

export default Navbar;
