import React from "react";
import { useSelector } from "react-redux";

import classes from "./PostModal.module.css";

import ReactPlayer from "react-player";

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
  const [shareImage, setShareImage] = React.useState("");
  const [shareVideo, setShareVideo] = React.useState("");

  //HANDLING UPLOADED IMAGE
  const handleImageUpload = (e) => {
    if (e.target.files[0]) setShareImage(e.target.files[0]);
  };

  //HANDLING CLOSE MODAL
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
            />

            <div className={classes.uploadImage}>
              <input
                type="file"
                accept="image/gif,image/jpeg,image/png"
                name="image"
                id="file"
                onChange={handleImageUpload}
              />
              <p>
                <label htmlFor="file">Select an image to share</label>
              </p>

              {shareImage && (
                <img src={URL.createObjectURL(shareImage)} alt="" />
              )}

              <input
                type="text"
                placeholder="please input a video link"
                value={shareVideo}
                onChange={(e) => setShareVideo(e.target.value)}
              />

              {shareVideo && <ReactPlayer width={"100%"} url={shareVideo} />}
            </div>
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
