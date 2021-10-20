import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

import { Navbar, Container, Nav } from "react-bootstrap";

const NavHeader = () => {
  return (
    <Navbar
      className="navbar"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="top"
    >
      <Container className="nav-item">
        <Navbar.Brand className="logo" as={Link} to="/">
          C.Agatha
        </Navbar.Brand>
        <Navbar.Toggle
          className="navbar-toggler"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="nav-link" eventKey="1" as={Link} to="/About">
              About
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              eventKey="2"
              as={Link}
              to="/My_Project"
            >
              Project
            </Nav.Link>
            <Nav.Link className="nav-link" eventKey="3" as={Link} to="/Contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavHeader;
