import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Timestamp } from "firebase/firestore";

import classes from "./PostModal.module.css";

import ReactPlayer from "react-player";

import { createPost } from "../../../store/Posts/PostsThunk";

import {
  closeIcon,
  userIcon,
  photoIcon,
  videoIcon,
  commentIcon,
} from "../../../images";

const PostModal = ({ closeModal }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => JSON.parse(state.auth.user));

  const [editorText, setEditorText] = React.useState("");
  const [shareImage, setShareImage] = React.useState("");
  const [shareVideo, setShareVideo] = React.useState("");
  const [assetArea, setAssetArea] = React.useState(false);

  //RESET STATES
  const resetStates = () => {
    setEditorText("");
    setShareImage("");
    setShareVideo("");
    setAssetArea(false);
  };

  //HANDLING UPLOADED IMAGE
  const handleImageUpload = (e) => {
    if (e.target.files[0]) setShareImage(e.target.files[0]);
  };

  //HANDLING CLOSE MODAL
  const closeModalHandler = () => {
    closeModal();
    resetStates();
  };

  //SHARE POST
  const sharePost = (event) => {
    event.preventDefault();

    const timestamp = Timestamp.now();

    dispatch(
      createPost({ editorText, user, shareImage, shareVideo, timestamp })
    );

    closeModalHandler();
  };

  //UPLOADER COMPONENTS
  const imageUploaderComponent = (
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

      {shareImage && <img src={URL.createObjectURL(shareImage)} alt="" />}
    </div>
  );

  const videoUploaderComponent = (
    <>
      <input
        type="text"
        placeholder="please input a video link"
        value={shareVideo}
        onChange={(e) => setShareVideo(e.target.value)}
      />
      {shareVideo && <ReactPlayer width={"100%"} url={shareVideo} />}
    </>
  );

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

            {assetArea == "photo"
              ? imageUploaderComponent
              : assetArea == "video"
              ? videoUploaderComponent
              : null}
          </div>
        </section>

        <section className={classes.shareCreation}>
          <div className={classes.attachAssets}>
            <button
              className={classes.assetButton}
              onClick={() => setAssetArea("photo")}
            >
              <img src={photoIcon} alt="" />
            </button>

            <button
              className={classes.assetButton}
              onClick={() => setAssetArea("video")}
            >
              <img src={videoIcon} alt="" />
            </button>

            <div className={classes.shareComment}>
              <button className={classes.assetButton}>
                <img src={commentIcon} alt="" />
              </button>
            </div>

            <button className={classes.postButton} onClick={sharePost}>
              Post
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default PostModal;
