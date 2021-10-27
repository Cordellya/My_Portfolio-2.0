import React from "react";
import "./style.scss";

import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer-section" id="footer">
      <Container className="footer-card">
        <Row className="footer-row">
          <Col className="footer-text" sm="6">
            <div className="wrapper">
              <div className="name">
                <div className="line"></div>
                <h2>Hello</h2>
              </div>
              <h1>Let's Connect</h1>
            </div>
          </Col>
          <Col sm="6" className="link">
            <a href="https://github.com/Cordellya">Github</a>
            <a href="https://www.linkedin.com/in/cordellya-agatha">LinkedIn</a>
            <a href="https://dribbble.com/cxgtha">Dribble</a>
            <a href="http://instagram.com/cxgtha">Instagram</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
