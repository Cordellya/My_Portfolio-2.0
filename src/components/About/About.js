import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import my_image from "../../assets/images/cordel-removebg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faReact,
  faCss3,
  faPython,
  faNodeJs,
  faBootstrap,
  faJs,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

import { SiFlutter, SiCplusplus } from "react-icons/si";

import "./style.scss";

const About = () => {
  const iconInfo = [
    { icon: faHtml5, color: "#d00000" },
    { icon: faCss3, color: "#0096c7" },
    { icon: faSass, color: "#f72585" },
    { icon: faJs, color: "#ffb700" },
    { icon: faBootstrap, color: "#5a189a" },
    { icon: faReact, color: "#0096c7" },
    { icon: faNodeJs, color: "#55a630" },
    { icon: faPython, color: "#212529" },
  ];
  return (
    <div className="about-section">
      <Container>
        <Row>
          <Col md="5" className="my__image">
            <img src={my_image} alt="" />
          </Col>
          <Col md="7" className="about-text">
            <div className="name">
              <div className="line"></div>
              <h2>Cordellya Agatha</h2>
            </div>
            <h1>About me</h1>
            <p>
              I am a 2nd year college student at Tarumanagara University,
              majoring in computer science. Currently, I have an interest in
              UI/UX Design, Frontend Development, and Data Analysis. I have
              always been fascinated by the simple and beautiful interfaces,
              because of that I started telling myself that I want to be able to
              create something like that. I have a dream to be able to create an
              easy to use UI with an attractive and stunning design someday.
            </p>
            <div className="skill">
              {iconInfo.map((el, idx) => (
                <FontAwesomeIcon
                  key={idx}
                  icon={el.icon}
                  className="icon"
                  style={{ color: el.color }}
                />
              ))}
              <a className="icon" style={{ color: "#48cae4" }}>
                <SiFlutter />
              </a>
              <a className="icon" style={{ color: "#023e8a" }}>
                <SiCplusplus />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
