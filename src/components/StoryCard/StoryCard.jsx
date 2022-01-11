import React from "react";
import "./StoryCard.css";
const StoryCard = ({ img, username }) => {
  return (
    <div className="storyCard">
      <img
        src={img}
        alt="storyImage"
        width="60px"
        height="60px"
        className="storyImage"
      />
      <div>
        <center>{username}</center>
      </div>
    </div>
  );
};

export default StoryCard;
