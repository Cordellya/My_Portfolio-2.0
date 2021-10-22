import React from "react";
import { Row, Container, Col, Card } from "react-bootstrap";
import "./style.scss";
import img1 from "../../assets/images/jelajahj.png";

const MyProject = () => {
  const cardInfo = [
    {
      image: img1,
      title: "Jelajah Jakarta",
      desc: "Jelajah Jakarta is a web application that offers information about various vacation spots in Jakarta. This web is for educational purposes only and was made by a team of 5 people.",
    },
    {
      image: img1,
      title: "NgopiNusa",
      desc: "Jelajah Jakarta is a web application that offers information about various vacation spots in Jakarta. This web is for educational purposes only and was made by a team of 5 people.",
    },
    {
      image: img1,
      title: "Moviez",
      desc: "Jelajah Jakarta is a web application that offers information about various vacation spots in Jakarta. This web is for educational purposes only and was made by a team of 5 people.",
    },
    {
      image: img1,
      title: "RoomTalk",
      desc: "Jelajah Jakarta is a web application that offers information about various vacation spots in Jakarta. This web is for educational purposes only and was made by a team of 5 people.",
    },
    {
      image: img1,
      title: "Card Design",
      desc: "Jelajah Jakarta is a web application that offers information about various vacation spots in Jakarta. This web is for educational purposes only and was made by a team of 5 people.",
    },
  ];

  return (
    <div className="project-section">
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
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.desc}</Card.Text>
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
