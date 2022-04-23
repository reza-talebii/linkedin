import React from "react";

import classes from "./Posts.module.css";

import SharePost from "./SharePost";

const Posts = () => {
  return (
    <section className={classes.container}>
      <SharePost />
    </section>
  );
};

export default Posts;
