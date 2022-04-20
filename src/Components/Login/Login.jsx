import React from "react";

import { Link } from "react-router-dom";

import logoImage from "../../images/login-logo.svg";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <section className={classes.container}>
      <nav className={classes.nav}>
        {/* LOGO */}
        <Link to="/">
          <img src={logoImage} alt="logo" />
        </Link>
        {/* BUTTON */}
        <section>
          <Link to="/join-us" className={classes.joinUs}>
            Join Us
          </Link>
          <Link to="/sign-in" className={classes.signIn}>
            Sign in
          </Link>
        </section>
      </nav>
    </section>
  );
};

export default Login;
