import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typed from "react-typed";

import img1 from "../../assets/images/undraw_Reading_re_29f8.svg";
import MyProject from "../MyProject/MyProject";
import Footer from "../Footer/Footer";
import NavHeader from "../Navbar/Navbar";

import "./style.scss";

const Home = () => {
  return (
    <>
      <NavHeader />
      <FirstSection />
      <SecondSection />
      <MyProject />
      <Footer />
    </>
  );

  function FirstSection() {
    return (
      <div className="section-landing" id="home">
        <Container>
          <Row>
            <Col className="landing-text" md="6">
              <div className="wrapper">
                <div className="name">
                  <div className="line"></div>
                  <h2>Cordellya Agatha</h2>
                </div>
                <h1>Hello, My Name is Agatha</h1>
                <div className="typing-group">
                  <h2>
                    Interest in{" "}
                    <Typed
                      strings={[
                        "Frontend Development",
                        "UI/UX Design",
                        "Data Analysis",
                      ]}
                      typeSpeed={100}
                      backSpeed={50}
                      loop
                    />
                  </h2>
                </div>
              </div>
            </Col>
            <Col md="6" className="d-none d-md-block">
              <img src={img1} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  function SecondSection() {
    return (
      <div className="WhatIDo-section" id="about">
        <Container>
          <Row>
            <Col className="WhatIDo-text" md="7" sm="10">
              <div className="wrapper">
                <div className="name">
                  <div className="line"></div>
                  <h2>What I Do</h2>
                </div>
                <h2 className="WhatIDo-subhead">
                  I like creating something beautiful and delightful
                </h2>
                <h1>Think. Make. Solve.</h1>
                <Button as={Link} to="/About" size="lg" className="btn-about">
                  About me{" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="icon"
                  ></FontAwesomeIcon>
                </Button>
              </div>
            </Col>
            <Col md="5" sm="2" className="img"></Col>
          </Row>
        </Container>
      </div>
    );
  }
};
export default Home;
