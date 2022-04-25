import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import classes from "./Posts.module.css";

import { getAllPost } from "../../../store/Posts/PostsThunk";

import { SharePost, Post } from "../../";

import { spinner } from "../../../images/";

const Posts = () => {
  const user = useSelector((state) => JSON.parse(state.auth.user));
  const { posts, loading } = useSelector((state) => state?.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) dispatch(getAllPost());
  }, [dispatch]);

  return (
    <section className={classes.container}>
      <SharePost />

      {loading && (
        <section className={classes.spinner}>
          <img src={spinner} alt="" />
        </section>
      )}

      {[...posts]?.reverse()?.map((post, i) => (
        <Post key={i} post={post} />
      ))}
    </section>
  );
};

export default Posts;
