import React from "react";

const HeaderMain = () => {
  return (
    <main className="banner-bg row">
      <div className="header-main col-md-12 ">
        <h2 className="header-text">FIND YOUR HOUSE RENT</h2>
        <div className="search-holder">
          <input
            className="search-bar"
            type="text"
            placeholder="Search..."
            name="search"
          />
          <button className="green-btn">Find Now</button>
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;
