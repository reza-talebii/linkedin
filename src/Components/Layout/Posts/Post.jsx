import React from "react";
import ReactPlayer from "react-player";

import {
  userIcon,
  ellipsisIcon,
  likeIcon,
  commentIcon,
  sharedImageIcon,
  sendIcon,
} from "../../../images";

import classes from "./Post.module.css";

const Post = ({ post }) => {
  const {
    post: { comments, description, image, video, like },
  } = post;

  //ACTOR POST
  const {
    actor: { profileImage, description: email, title },
  } = post;

  return (
    <section className={classes.article}>
      <div className={classes.shareActor}>
        <a>
          <img src={profileImage || userIcon} alt="avatar" />
          <div>
            <span>{title}</span>
            <span>{email}</span>
            <span>Date</span>
          </div>
        </a>
        <button>
          <img src={ellipsisIcon} alt="" />
        </button>
      </div>

      <div className={classes.description}>{description}</div>

      <div className={classes.sharedImg}>
        <a>
          {image ? (
            <img src={image} alt="shared image" />
          ) : (
            <ReactPlayer url={video} width={"100%"} height={"100%"} />
          )}
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
  );
};

export default Post;
