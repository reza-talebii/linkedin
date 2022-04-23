import React from "react";

import classes from "./Posts.module.css";

import {
  userIcon,
  ellipsisIcon,
  likeIcon,
  commentIcon,
  sharedImageIcon,
  sendIcon,
} from "../../../images";

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

        <ul className={classes.socialCounts}>
          <li>
            <button>
              <img
                src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                alt=""
              />
              <img
                src="https://static-exp1.licdn.com/sc/h/cm8d2ytayynyhw5ieaare0tl3"
                alt=""
              />
              <span>75</span>
            </button>
          </li>
          <li>
            <a> comments</a>
          </li>
        </ul>

        <ul className={classes.socialActions}>
          <button>
            <img src={likeIcon} alt="" />
            <span>Like</span>
          </button>
          <button>
            <img src={commentIcon} alt="" />
            <span>Comment</span>
          </button>
          <button>
            <img src={sharedImageIcon} alt="" />
            <span>Share</span>
          </button>
          <button>
            <img src={sendIcon} alt="" />
            <span>Send</span>
          </button>
        </ul>
      </section>
    </section>
  );
};

export default Posts;
