import React from "react";

import classes from "./SharePost.module.css";

import {
  userIcon,
  photoIcon,
  videoIcon,
  eventIcon,
  writeArticleIcon,
} from "../../../images";

const SharePost = () => {
  return (
    <section className={classes.shareBox}>
      <div>
        <img src={userIcon} alt="user" />
        <button>Start a post</button>
      </div>

      <div>
        <button>
          <img src={photoIcon} alt="Photo" />
          <span>Photo</span>
        </button>

        <button>
          <img src={videoIcon} alt="Video" />
          <span>Video</span>
        </button>

        <button>
          <img src={eventIcon} alt="Event" />
          <span>Event</span>
        </button>

        <button>
          <img src={writeArticleIcon} alt="Write article" />
          <span>Write article</span>
        </button>
      </div>
    </section>
  );
};

export default SharePost;
