import React, { useContext, useState } from "react";
import logoDark from "../img/Logo-Dark.png";
import logoLight from "../img/Logo-Light.png";
import HambergerDark from "../img/Hamberger-Dark.png";
import HambergerLight from "../img/Hamberger-Light.png";
import { AppContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

function Header() {
  const nav = useNavigate();

  
  const NavHandler = (path) => {
    nav(path);
  };
  
  const myContext = useContext(AppContext);
  
  const ClickHandler = () => {
    myContext.setCol(myContext.col == true ? false : true);
  };
  
  const [srchVal, setSrchVal] = useState("");
  const searchAlg = () => {
    // console.log("searchAlg");

    if (srchVal !== "") {
      nav("search-page")
    }

  };

  return (
    <div className="header">
      <div className="header-child">
        <div className="hambergerIcon" onClick={ClickHandler}>
          {/* <img src={HambergerDark} height={12} width={24} /> */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="logo">
          <img
            src={logoLight}
            height={24}
            width={108}
            onClick={() => NavHandler("/")}
          />
        </div>
      </div>
      <div className="header-child">
        <input
          type="search"
          placeholder="Search"
          value={srchVal}
          onChange={e=> setSrchVal(e.target.value)}
        />
        <button onClick={searchAlg}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3917/3917754.png"
            height={20}
            width={20}
          />
        </button>
      </div>
      <div className="header-child">
        <div className="threedot">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-three-dots-vertical"
            viewBox="0 0 16 16"
          >
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
          </svg>
        </div>
        <div className="usericon">
          <img
            src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
            height={36}
            width={36}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
