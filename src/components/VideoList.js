import React from "react";
import VideoItem from "./VideoItem";

// const VideoList = (props) => {
//   return <div>{props.vid.length}</div>;
// };
//we can also do it by using by using es6 variant
//we can do destructuring here
const VideoList = ({ vid, onVideoClick }) => {
  const renderedList = vid.map((vl) => {
    return (
      <VideoItem
        //key={v1.id.videId}
        onVideoClick={onVideoClick}
        videoDetail={vl}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};
export default VideoList;
