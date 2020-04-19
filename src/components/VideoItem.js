import "./VideoItem.css";
import React from "react";

const VideoItem = ({ videoDetail, onVideoClick }) => {
  return (
    <div onClick={() => onVideoClick(videoDetail)} className="video-item item">
      <img
        className="ui image"
        src={videoDetail.snippet.thumbnails.default.url}
        alt=""
      />
      <div className="content">
        <div className="header">{videoDetail.snippet.title}</div>
      </div>
    </div>
  );
};
export default VideoItem;
