import React from "react";
import SideBar from "./SideBar";
import Slider from "./Slider";
import VideoGrid from "./VideoGrid";

function VidGridContnr() {
  return (
    <>
      <div className="vidGridContnr">
        <div className="left">
          <SideBar />
        </div>
        <div className="right">
          <Slider />
          <VideoGrid />
        </div>
      </div>
    </>
  );
}

export default VidGridContnr;
