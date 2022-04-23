import React from "react";

import { Link, useNavigate } from "react-router-dom";

import { logoImage, bannerImage, googleIcon } from "../../images";

import classes from "./Login.module.css";

import { authActions } from "../../store/AuthSlice";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase/server";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(authActions.signup({ user: JSON.stringify(result.user) }));
        navigate("/home");
      })
      .catch((error) => console.log(error.message));
  };

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
          <button className={classes.googleBtn} onClick={handleLogin}>
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
