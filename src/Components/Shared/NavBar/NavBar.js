import React from "react";
import { Link } from "react-router-dom";
import logo from ".././../../images/logos/Logo.png";

const NavBar = () => {
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <nav className="navbar navbar-expand-lg">
              <Link className="navbar-brand ml-5" href="#">
                <img src={logo} alt="" className="img-fluid" />
              </Link>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/home">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/services">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/event">
                      Event
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                  <Link className=" mr-5 pr-5" to="/login">
                    <button className="green-btn">Login</button>
                  </Link>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
