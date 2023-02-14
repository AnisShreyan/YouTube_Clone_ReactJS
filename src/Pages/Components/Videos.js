import React from "react";

function Videos({ thumbnail, title, views, date, logo, channelName, length }) {
  return (
    <>
      <div className="videos">
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
