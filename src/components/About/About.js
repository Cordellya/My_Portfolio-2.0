import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import my_image from "../../assets/images/cordel-removebg.png";
import "./style.scss";

const About = () => {
  return (
    <div className="about-section">
      <Container>
        <Row>
          <Col md="5" className="my__image">
            <img src={my_image} alt="" />
          </Col>
          <Col md="7" className="about-text">
            <h1>About me</h1>
            <p>
              My name is Cordellya Agatha. I am a 2nd year college student at
              Tarumanagara University, majoring in computer science. I have an
              interest in UI/UX Design and Frontend Development. I have always
              been fascinated by the simple and beautiful interfaces, because of
              that I started telling myself that I want to be able to create
              something like that. I have a dream to be able to create an easy
              to use UI with an attractive and stunning design someday.
            </p>
            <Row></Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
