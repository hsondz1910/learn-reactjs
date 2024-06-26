import React from "react";

const youtubeitem = (props) => {
  return (
    <div>
      <img
        className="youtube-img"
        src={props.video || "Youtube video"}
        alt="Youtube video"
      ></img>
      <img
        className="youtube-avt"
        src={props.avt || "Channel avatar"}
        alt="Channel avatar"
      ></img>
      <h2 className="youtube-title">{props.title || "Title"}</h2>
      <h3 className="youtube-channel">{props.channel || "Channel name"}</h3>
      <p className="youtube-description">
        {props.description || "Description"}
      </p>
    </div>
  );
};

export default youtubeitem;
