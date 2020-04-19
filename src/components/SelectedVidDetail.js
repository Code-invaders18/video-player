import React from "react";

//here we r doing the destructuring of the props.videoDetail in the given function
const selectedVidDetail = ({ videoDetail }) => {
  console.log("hi from selectedVidDetail component");
  if (!videoDetail) {
    return <div>Loading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${videoDetail.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{videoDetail.snippet.title}</h4>
        <p>{videoDetail.snippet.description}</p>
      </div>
    </div>
  );
};
export default selectedVidDetail;
