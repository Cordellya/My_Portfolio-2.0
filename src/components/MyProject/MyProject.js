import React from "react";
import { Row, Container, Col, Card, Button } from "react-bootstrap";
import "./style.scss";

import img1 from "../../assets/images/jelajahj.png";
import img2 from "../../assets/images/ngopinusa.png";
import img3 from "../../assets/images/Moviez.png";
import img5 from "../../assets/images/gabungan(2).png";

const MyProject = () => {
  const cardInfo = [
    {
      image: img1,
      title: "Jelajah Jakarta",
      desc: "Jelajah Jakarta is a web application that offers information about various vacation spots in Jakarta. This web is for educational purposes only and was made by a team of 5 people.",
      link: "http://jelajahjakarta.herokuapp.com/",
    },
    {
      image: img2,
      title: "NgopiNusa",
      desc: "Jelajah Jakarta is a web application that offers information about various vacation spots in Jakarta. This web is for educational purposes only and was made by a team of 5 people.",
      link: "https://ngopinusa.site/",
    },
    {
      image: img3,
      title: "Moviez",
      desc: "Moviez is a movie app which provides informations and trailers about movies. This app is for educational purposes only and was made by a team of 5 people.",
      link: "https://github.com/MobileProgramming-Kelompok5/Movie-App-2.git",
    },
    {
      image: img1,
      title: "RoomTalk",
      desc: "This project is a UI/UX project. The purpose of this project is to improve our skill in front-end development. We made front-end website for an online forum where people can find friends that share the same hobby and share their stories.",
      link: "none",
    },
    {
      image: img5,
      title: "Card Design",
      desc: "Jelajah Jakarta is a web application that offers information about various vacation spots in Jakarta. This web is for educational purposes only and was made by a team of 5 people.",
    },
  ];

  return (
    <div className="project-section" id="my_project">
      <Container>
        <Row>
          <Col md="12" className="heading-text">
            <div className="wrapper">
              <div className="name">
                <div className="line"></div>
                <h2>Portfolio</h2>
              </div>
              <h1>Look at My Project</h1>
            </div>
          </Col>
        </Row>
        <Row md={2} className="card-row">
          {cardInfo.map((card, idx) => (
            <Col key={idx} className="card-col">
              <Card className="card">
                <Card.Img variant="top" src={card.image}></Card.Img>
                <Card.Body className="card-body">
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.desc}</Card.Text>
                  {idx != 4 ? (
                    <Button size="md" className="btn-card" href={card.link}>
                      View
                    </Button>
                  ) : null}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MyProject;
