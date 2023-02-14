import React from "react";
import { useNavigate } from "react-router-dom";

function Videos({ thumbnail, title, views, date, logo, channelName, length }) {

  const nav = useNavigate()

  const gotoVid = ()=>{
    nav('single-video')
  }

  return (
    <>
      <div className="videos" onClick={gotoVid}>
        <img className="thumbnail" src={thumbnail} />
        <p className="video-length">{length}</p>
        <div className="vid-details">
          <img className="channel-logo" src={logo} />
          <div className="tag">
            <p>{title}</p>
            <p>{channelName}</p>
            <p>
              {views} views <span>.</span> {date} ago
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Videos;
