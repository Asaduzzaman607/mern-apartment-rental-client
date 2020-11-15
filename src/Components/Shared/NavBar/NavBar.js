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
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" href="#">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" href="#">
                      About
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" href="#">
                      Services
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" href="#">
                      Event
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link className="nav-link" href="#">
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item active mr-5 pr-5">
                    <button className="green-btn ">Login</button>
                  </li>
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
