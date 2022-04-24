import React from "react";
import { useSelector } from "react-redux";

import classes from "./PostModal.module.css";

import {
  closeIcon,
  userIcon,
  sharedImageIcon,
  videoIcon,
  commentIcon,
} from "../../../images";

const PostModal = ({ closeModal }) => {
  const user = useSelector((state) => JSON.parse(state.auth.user));
  const [editorText, setEditorText] = React.useState("");

  const closeModalHandler = () => {
    closeModal();
    setEditorText("");
  };

  return (
    <section className={classes.container}>
      <div className={classes.content}>
        <header className={classes.header}>
          <h2>Create a post</h2>
          <button onClick={closeModalHandler}>
            <img src={closeIcon} alt="close icon" />
          </button>
        </header>

        <section className={classes.sharedContent}>
          <div className={classes.userInfo}>
            <img src={user?.photoURL || userIcon} alt="avatar" />
            <span>{user?.displayName}</span>
          </div>

          <div className={classes.editor}>
            <textarea
              value={editorText}
              onChange={(e) => setEditorText(e.target.value)}
              placeholder="What do you want to share?"
              autoFocus={true}
            >
              {editorText}
            </textarea>
          </div>
        </section>

        <section className={classes.shareCreation}>
          <div className={classes.attachAssets}>
            <button className={classes.assetButton}>
              <img src={sharedImageIcon} alt="" />
            </button>

            <button className={classes.assetButton}>
              <img src={videoIcon} alt="" />
            </button>

            <div className={classes.shareComment}>
              <button className={classes.assetButton}>
                <img src={commentIcon} alt="" />
              </button>
            </div>

            <button className={classes.postButton} disabled={!!editorText}>
              Post
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default PostModal;
