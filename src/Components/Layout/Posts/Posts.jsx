import React from "react";

import classes from "./Posts.module.css";

import { userIcon, ellipsisIcon } from "../../../images";

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
      </section>
    </section>
  );
};

export default Posts;
