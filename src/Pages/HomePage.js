import React from "react";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import VidGridContnr from "./Components/VidGridContnr";

function HomePage() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <VidGridContnr />
    </div>
  );
}

export default HomePage;
