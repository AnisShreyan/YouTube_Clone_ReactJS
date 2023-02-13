import React, { useState } from "react";

function Slider() {
  return (
    <>
      <div className="top-scroll-bar">
        <ul>
          <li className={"slider-active"}>All</li>
          <li>Web Devlopment</li>
          <li>Music</li>
          <li>Gaming</li>
          <li>App Devlopment</li>
          <li>Live</li>
          <li>News</li>
          <li>Technology</li>
          <li>Recently played</li>
        </ul>
      </div>
    </>
  );
}

export default Slider;
