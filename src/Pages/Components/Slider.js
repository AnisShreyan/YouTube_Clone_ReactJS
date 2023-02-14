import React, { useState } from "react";

function Slider() {


  const [actv, setActv] = useState("all")

  const ClickHandlr = (filter)=>{
    switch (filter) {
      case "all": setActv("all")
        break;
      case "webDevlopment": setActv("webDevlopment")
        break;
      case "music": setActv("music")
        break;
      case "gaming": setActv("gaming")
        break;
      case "appDevlopment": setActv("appDevlopment")
        break;
      case "live": setActv("live")
        break;
      case "news": setActv("news")
        break;
      case "technology": setActv("technology")
        break;
      case "recentlyPlayed": setActv("recentlyPlayed")
        break;
    
      default:
        break;
    }
  }

  return (
    <>
      <div className="top-scroll-bar">
        <ul>
          <li className={actv =="all"? "slider-active": ""} onClick={()=>ClickHandlr("all")}>All</li>
          <li className={actv =="webDevlopment"? "slider-active": ""} onClick={()=>ClickHandlr("webDevlopment")}>Web Devlopment</li>
          <li className={actv =="music"? "slider-active": ""} onClick={()=>ClickHandlr("music")}>Music</li>
          <li className={actv =="gaming"? "slider-active": ""} onClick={()=>ClickHandlr("gaming")}>Gaming</li>
          <li className={actv =="appDevlopment"? "slider-active": ""} onClick={()=>{setActv("appDevlopment")}}>App Devlopment</li>
          <li className={actv =="live"? "slider-active": ""} onClick={()=>ClickHandlr("live")}>Live</li>
          <li className={actv =="news"? "slider-active": ""} onClick={()=>ClickHandlr("news")}>News</li>
          <li className={actv =="technology"? "slider-active": ""} onClick={()=>ClickHandlr("technology")}>Technology</li>
          <li className={actv =="recentlyPlayed"? "slider-active": ""} onClick={()=>ClickHandlr("recentlyPlayed")}>Recently Played</li>
        </ul>
      </div>
    </>
  );
}

export default Slider;
