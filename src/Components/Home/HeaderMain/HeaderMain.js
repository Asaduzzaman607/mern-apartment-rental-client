import React from "react";
import { useLocation } from "react-router-dom";

const HeaderMain = () => {
  const location = useLocation();
  return (
    <main className="header-container">
      {location.pathname === "/" || location.pathname === "/home" ? (
        <>
          <div className="banner-bg row">
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
          </div>
        </>
      ) : (
        <>
          <div className="banner-bg2 row">
            <div className="header-main col-md-12 ">
              <h2 className="header-text text-center">Apartment</h2>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default HeaderMain;
