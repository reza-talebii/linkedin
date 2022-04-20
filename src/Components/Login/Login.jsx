import React from "react";
import logoImage from "../../images/login-logo.svg";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <section className={classes.container}>
      <nav className={classes.nav}>
        <a href="/">
          <img src={logoImage} alt="logo" />
        </a>
      </nav>
    </section>
  );
};

export default Login;
