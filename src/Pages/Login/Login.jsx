import React from "react";

import { Link } from "react-router-dom";

import { logoImage, bannerImage, googleIcon } from "../../images";

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
      {/* BANNER CONTENT */}
      <section className={classes.banner}>
        <section className={classes.banner_text}>
          <h1>Welcome To your perofessional community</h1>
          <button className={classes.googleBtn}>
            <img src={googleIcon} /> Sign in with Google
          </button>
        </section>
        <section className={classes.banner_image}>
          <img src={bannerImage} alt="banner" />
        </section>
      </section>
    </section>
  );
};

export default Login;
