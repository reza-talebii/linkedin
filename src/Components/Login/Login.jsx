import React from "react";
import styled from "styled-components";
import logoImage from "../../images/login-logo.svg";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <section className={classes.container}>
      <nav>
        <a href="/">
          <img src={logoImage} alt="logo" />
        </a>
      </nav>
    </section>
  );
};

// Styles

// const Container = styled.section`
//   max-width:
// `;
// const Nav = styled.nav``;

export default Login;
