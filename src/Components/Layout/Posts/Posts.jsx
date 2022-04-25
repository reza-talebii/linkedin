import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./Posts.module.css";

import { getAllPost } from "../../../store/Posts/PostsThunk";

import { SharePost, Post } from "../../";

const Posts = () => {
  const user = useSelector((state) => state?.auth?.user);
  const { posts } = useSelector((state) => state?.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) dispatch(getAllPost());
  }, [dispatch]);

  return (
    <section className={classes.container}>
      <SharePost />

      {[...posts]?.reverse()?.map((post, i) => (
        <Post key={i} post={post} />
      ))}
    </section>
  );
};

export default Posts;
