import React from "react";

import classes from "./Home.module.css";

import { Posts, UserInfo, Tags } from "../../components";

const Home = () => {
  return (
    <section className={classes.container}>
      <section className={classes.content}>
        <h5>
          <a>Hiring in a hurry? - </a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
      </section>

      <div className={classes.layout}>
        <UserInfo />
        <Posts />
        <Tags />
      </div>
    </section>
  );
};

export default Home;