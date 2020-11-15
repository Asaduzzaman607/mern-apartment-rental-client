import React from "react";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <main className="header-bg">
      <div className="header-main">
        <h2 className="header-text">FIND YOUR HOUSE RENT</h2>
        <div className="search-holder">
          <input
            className="search-bar"
            type="text"
            placeholder="Search..."
            name="search"
          />
          <button className="green-btn">Find Yes</button>
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;
