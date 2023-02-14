import React from "react";
import Videos from "./Videos";

function VideoGrid() {
  const video_content = [
    {
      thumbnail:
        "https://i.ytimg.com/vi/V2efVSXSlqc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPnEBbCSYg_JjguTjwMUbaXxulQw",
      title: "Create Your Own AI Animated Avatar: A Step-b...",
      views: "395K",
      date: "8 days",
      logo: "https://yt3.ggpht.com/ByvUQswoQuVBMrNKtoRaHeJpV-G7OT99ECTkDIPO3Fb-ImXW_vDzmd-BqvAsx-YgoEaQeSJH5w=s68-c-k-c0x00ffffff-no-rj",
      channelName: "Prompt Engineering",
      length: "9.34",
    },

    {
      thumbnail:
        "https://i.ytimg.com/vi/CjHP1W3nxe8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6rMcMCdpOLWI1gVEZcatthzklhQ",
      title: "How I Made A YouTube Channel Using Only AI...",
      views: "148K",
      date: "8 days",
      logo: "https://yt3.ggpht.com/ytc/AL5GRJVRMyKv1r1TNf_OB-fXjlJyhiiPNbbvJ7Y-TPLH1A=s68-c-k-c0x00ffffff-no-rj",
      channelName: " Jensen Tung",
      length: "9.34",
    },

    {
      thumbnail:
        "https://i.ytimg.com/vi/2JYT5f2isg4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBfMkVw32Ek8BKhBrj6gIF716s71A",
      title:
        "Full HTTP Networking Course – Fetch and REST APIs in JavaScript...",
      views: "205K",
      date: "13 days",
      logo: "https://yt3.ggpht.com/ytc/AL5GRJXPR4dSz0wwP-elkeiWUMnfZlCtNZP8Rd-tmFOZYg=s68-c-k-c0x00ffffff-no-rj",
      channelName: "freeCodeCamp.org",
      length: "9.34",
    },

    {
      thumbnail:
        "https://i.ytimg.com/vi/Nt70Ld0dJCM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2pjS1ljic8Tlo3d-aMTSVULG17g",
      title: "Build Parallax Website With HTML CSS & Javascript...",
      views: "136K",
      date: "1 year",
      logo: "https://yt3.ggpht.com/JfcqVinxsIc8dYsPIrp6IBDRMBb420BqVd2bzS9wqcMWBTzmnjUJ74Q0VByY1gUA8p-AYZQzxQ=s68-c-k-c0x00ffffff-no-rj",
      channelName: "developedbyed",
      length: "9.34",
    },

    {
      thumbnail:
        "https://i.ytimg.com/vi/Z37ukFI4Ot0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAm45Bp5vOp_UyrMESb3kOjoWn9XQ",
      title:
        "Creating an Animated Sidebar Menu in Flutter with Rive - Episode 5...",
      views: "39K",
      date: "4 weeks",
      logo: "https://yt3.ggpht.com/ytc/AL5GRJWfauqXCWct2vojX-5tHLL-8PHUS8uZMWO9bq9Y=s68-c-k-c0x00ffffff-no-rj",
      channelName: "The Flutter Way",
      length: "9.34",
    },
    {
      thumbnail:
        "https://i.ytimg.com/vi/MpQbwtSiZ7E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD89_lacH5kjrGX9hw1s5XjlGOnFg",
      title: "Build a Fullstack Booking App using MERN (mongo,...",
      views: "46K ",
      date: "3 weeks",
      logo: "https://yt3.ggpht.com/GbNZ376PtR6w-cUMn9zWCrU1HhvG5m-8R7rFeadGmwT6ueb8CnWyO4OgyJIrEZrm_c2W1EDd=s68-c-k-c0x00ffffff-no-rj",
      channelName: "Coding With Dawid",
      length: "9.34",
    },
    {
      thumbnail:
        "https://i.ytimg.com/vi/rg7Fvvl3taU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDh0NYfb9PchvmSG06vg_ds1oLlg",
      title: "Learn CSS Grid the easy way...",
      views: "577K",
      date: "1 year",
      logo: "https://yt3.ggpht.com/ytc/AL5GRJUvyoz58-Shq477iC8w1Q0zl8Cp10Zmuo6Gw9YUrA=s68-c-k-c0x00ffffff-no-rj",
      channelName: "Kevin Powell",
      length: "9.34",
    },
    {
      thumbnail:
        "https://i.ytimg.com/vi/Zddof7W_xnY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDke8IBHTdlNdW2hISgdgclEY4j9A",
      title: "11 Section layouts to make your website ultra UNIQUE...",
      views: "8.1K",
      date: "5 days",
      logo: "https://yt3.ggpht.com/Q6cghE6QO1xUWwMM1jFWoH3ipt3ILUQRNLWvmqQs1UmWmoiMrDGQhD78cbd3ViA3fU2d4TpU=s68-c-k-c0x00ffffff-no-rj",
      channelName: "Payton Clark Smith",
      length: "9.34",
    },
  ];

  return (
    <div className="Video-Grid">
      {video_content.map((x, y) => (
        <Videos
          thumbnail={x.thumbnail}
          title={x.title}
          views={x.views}
          date={x.date}
          logo={x.logo}
          channelName={x.channelName}
          length={x.length}
          key={y}
        />
      ))}
    </div>
  );
}

export default VideoGrid;
