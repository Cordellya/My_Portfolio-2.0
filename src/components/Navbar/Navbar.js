import React from "react";
import { Link as Link1 } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link as Link2 } from "react-scroll";

import "./style.scss";

// import MyProject from "./components/MyProject/MyProject";

const NavHeader = () => {
  return (
    <Navbar
      className="navbar"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      fixed="top"
    >
      <Container className="nav-item">
        <Navbar.Brand className="logo" as={Link1} to="/">
          C.Agatha
        </Navbar.Brand>
        <Navbar.Toggle
          className="navbar-toggler"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="nav-link" eventKey="1" as={Link1} to="/About">
              About
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              eventKey="2"
              as={Link2}
              to="my_project"
              smooth={true}
              duration={500}
              spy={true}
            >
              Project
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              eventKey="3"
              as={Link2}
              to="footer"
              smooth={true}
              duration={500}
              spy={true}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavHeader;
