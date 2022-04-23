import React from "react";

import { feedIcon, rightIcon, seeJobsIcon } from "../../../images";

const Tags = () => {
  return (
    <Container>
      <FolowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src={feedIcon} alt="feed-icon" />
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Linkedin</span>
              <button>follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <button>follow</button>
            </div>
          </li>
        </FeedList>
        <Recommendation>
          View all recommendations
          <img src={rightIcon} alt="right-icon" />
        </Recommendation>
      </FolowCard>
      <BannerCard>
        <img src={seeJobsIcon} alt="banner" />
      </BannerCard>
    </Container>
  );
};

export default Tags;
