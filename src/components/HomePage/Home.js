import React from "react";
// import { useEffect } from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import Typed from "react-typed";

import img from "../../assets/images/undraw_Reading_re_29f8.svg";
import "./style.scss";

const Home = () => {
  return (
    <>
      <FirstSection />
      <SecondSection />
    </>
  );

  function FirstSection() {
    return (
      <Container className="section-landing">
        <Row>
          <Col className="landing-text" md="6">
            <div className="wrapper">
              <h1>
                Cordellya
                <br />
                Agatha
              </h1>
              <div className="line"></div>
              <div className="typing-group">
                <h2>
                  Interest in{" "}
                  <Typed
                    strings={[
                      "Frontend Development",
                      "UI/UX Design",
                      "Data Analyst",
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
            <img src={img} alt="" />
          </Col>
        </Row>
      </Container>
    );
  }

  function SecondSection() {
    return (
      <>
        <Container>
          <Row>
            <Col></Col>
            <Col></Col>
          </Row>
        </Container>
      </>
    );
  }
};

export default Home;
