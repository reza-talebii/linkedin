import React from "react";

import classes from "./UserInfo.module.css";

import { widgetIcon, itemIcon, plusIcon } from "../../../images";

const UserInfo = () => {
  return (
    <section className={classes.container}>
      <section className={classes.artCard}>
        <section className={classes.userInfo}>
          <section className={classes.cardBackground} />
          <a>
            <div className={classes.photo} />
            <div className={classes.link}>Welcome</div>
          </a>

          <a>
            <div className={classes.addPhotoText}>Add a photo</div>
          </a>
        </section>

        <div className={classes.widget}>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src={widgetIcon} alt="widget-icon" />
          </a>
        </div>

        <a className={classes.item}>
          <span>
            <img src={itemIcon} alt="item-icon" />
            My Items
          </span>
        </a>
      </section>

      <section className={classes.communityCard}>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src={plusIcon} alt="plus-icon" />
          </span>
        </a>
        <a>
          <span>Folow Hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </section>
    </section>
  );
};

export default UserInfo;
