import React from "react";

import classes from "./Posts.module.css";

import { userIcon, ellipsisIcon, sharedImageIcon } from "../../../images";

import SharePost from "./SharePost";

const Posts = () => {
  return (
    <section className={classes.container}>
      <SharePost />

      <section className={classes.article}>
        <div className={classes.shareActor}>
          <a>
            <img src={userIcon} alt="avatar" />
            <div>
              <span>Title</span>
              <span>Info</span>
              <span>Date</span>
            </div>
          </a>
          <button>
            <img src={ellipsisIcon} alt="" />
          </button>
        </div>
        <div className={classes.description}>description</div>
        <div className={classes.sharedImg}>
          <a>
            <img src={sharedImageIcon} alt="" />
          </a>
        </div>
      </section>
    </section>
  );
};

export default Posts;
