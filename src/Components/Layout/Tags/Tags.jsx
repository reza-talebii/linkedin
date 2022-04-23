import React from "react";

import classes from "./Tags.module.scss";

import { feedIcon, rightIcon, seeJobsIcon } from "../../../images";

const Tags = () => {
  return (
    <section className={classes.container}>
      <section className={classes.flowCard}>
        <div className={classes.title}>
          <h2>Add to your feed</h2>
          <img src={feedIcon} alt="feed-icon" />
        </div>

        <section className={classes.feedList}>
          <li>
            <a>
              <div className={classes.avatar} />
            </a>
            <div>
              <span>#Linkedin</span>
              <button>follow</button>
            </div>
          </li>
          <li>
            <a>
              <div className={classes.avatar} />
            </a>
            <div>
              <span>#Video</span>
              <button>follow</button>
            </div>
          </li>
        </section>

        <a className={classes.Recommendation}>
          View all recommendations
          <img src={rightIcon} alt="right-icon" />
        </a>
      </section>

      <section className={classes.bannerCard}>
        <img src={seeJobsIcon} alt="banner" />
      </section>
    </section>
  );
};

export default Tags;
