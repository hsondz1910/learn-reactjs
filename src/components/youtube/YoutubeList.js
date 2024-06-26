import React from "react";
import { YoutubeData } from "../../Data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  console.log(props);
  return (
    <div className="youtube-list">
      {props.children}
      {YoutubeData.map((item, index) => (
        <YoutubeItem
          key={item.id}
          video={item.video || item.avt}
          avt={item.avt}
          title={item.title}
          channel={item.channel}
          description={item.description}
        ></YoutubeItem>
      ))}
    </div>
  );
};

export default YoutubeList;
