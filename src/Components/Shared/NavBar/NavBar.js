import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import logo from ".././../../images/logos/Logo.png";
import "./_NavBar.scss";

const NavBar = () => {
  return (
    <nav className="pt-4 container nav-text">
      <Navbar bg="transparent" expand="lg">
        <Navbar.Brand href="/home">
          <img className="nav-logo" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="mr-3" href="/home">
              Home
            </Nav.Link>
            <Nav.Link className="mr-3" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="mr-3" href="/service">
              Service
            </Nav.Link>
            <Nav.Link className="mr-3" href="/concerns">
              Concerns
            </Nav.Link>
            <Nav.Link className="mr-3" href="/event">
              Event
            </Nav.Link>
            <Nav.Link className="mr-3" href="/contact">
              Contact
            </Nav.Link>
            <div href="/login">
              <button className="green-btn">Login</button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default NavBar;
