import React, { useState } from "react";

import classes from "./SharePost.module.css";

import { PostModal } from "../../";

import {
  userIcon,
  photoIcon,
  videoIcon,
  eventIcon,
  writeArticleIcon,
} from "../../../images";

import { useSelector } from "react-redux";

const SharePost = () => {
  const user = useSelector((state) => JSON.parse(state.auth.user));
  const [showPostModal, setShowPostModal] = useState(false);

  //CLOSE MODAL HANDLER
  const closeModalHandler = () => setShowPostModal(false);

  return (
    <>
      {showPostModal && <PostModal closeModal={closeModalHandler} />}

      <section className={classes.shareBox}>
        <div>
          <img src={user?.photoURL || userIcon} alt="user" />
          <button onClick={() => setShowPostModal(true)}>Start a post</button>
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
    </>
  );
};

export default SharePost;
