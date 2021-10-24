import { React, useState, useEffect } from "react";
import {
  Row,
  Container,
  Col,
  Card,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import "./style.scss";

import img1 from "../../assets/images/jelajahj.png";
import img2 from "../../assets/images/ngopinusa.png";
import img3 from "../../assets/images/Moviez.png";
import img4 from "../../assets/images/roomtalk.png";
import img5 from "../../assets/images/gabungan(2).png";

const MyProject = () => {
  const cardInfo = [
    {
      image: img1,
      title: "Jelajah Jakarta",
      desc: "Jelajah Jakarta is a web application that offers information about various vacation spots in Jakarta. This web is for educational purposes only and was made by a team of 5 people. In this project, I was working on the design and frontend",
      creator: "Cordellya Agatha, Angellina, Yongky Saputra, Vanesa Nellie",
      link: "http://jelajahjakarta.herokuapp.com/",
      mockup: "Mockup psd created by rawpixel.com",
      placement: "right",
    },
    {
      image: img2,
      title: "NgopiNusa",
      desc: "NgopiNusa is an online store that sells the best quality Indonesian coffee products. This online store is for a competition and made by 3 people. ",
      creator: "Cordellya Agatha, David Jansen, Adela Tania",
      link: "https://ngopinusa.site/",
      mockup: "Computer psd created by rawpixel.com",
      placement: "left",
    },
    {
      image: img3,
      title: "Moviez",
      desc: "Moviez is a movie app which provides informations and trailers about movies. This app is for educational purposes only and was made by a team of 5 people. In this project, I was working on the frontend and backend",
      creator:
        "Cordellya Agatha, David Jansen, Adela Tania, Caroline Wili Harto, Nicholas Hadi",
      link: "https://github.com/MobileProgramming-Kelompok5/Movie-App-2.git",
      mockup: "Technology psd created by rawpixel.com",
      placement: "right",
    },
    {
      image: img4,
      title: "RoomTalk",
      desc: "We made this project for fun and to improve our skill in UI/UX design. We made an online forum website design where people can share their stories and find friends that share the same hobby. ",
      creator: "Cordellya Agatha, Minawati, Evelin",
      link: "https://www.figma.com/proto/gzXFgk4kfwOO0AmOV7y9Lr/Project-UI%2FUX?node-id=1%3A2&starting-point-node-id=1%3A2",
      mockup: "Technology psd created by jcomp",
      placement: "left",
    },
    {
      image: img5,
      title: "Stationery Set Design",
      desc: "This is a Mid-Semester Exam project where I was asked to design a stationery set in the form of envelopes, business cards, and letterhead for business/profession purposes.",
      creator: "Cordellya Agatha",
      mockup: "Mockup psd created by CosmoStudio",
      placement: "right",
    },
  ];

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

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
        <CardProject />
      </Container>
    </div>
  );

  function CardProject() {
    return (
      <Row md={2} className="card-row">
        {cardInfo.map((card, idx) => (
          <Col key={idx} className="card-col">
            <Card className="card">
              {width < 760 ? (
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip id={`tooltip-right`}>{card.mockup}</Tooltip>
                  }
                >
                  <Card.Img variant="top" src={card.image} />
                </OverlayTrigger>
              ) : (
                <OverlayTrigger
                  placement={card.placement}
                  overlay={
                    <Tooltip id={`tooltip-right`}>{card.mockup}</Tooltip>
                  }
                >
                  <Card.Img variant="top" src={card.image} />
                </OverlayTrigger>
              )}
              <Card.Body className="card-body">
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.desc}</Card.Text>
                <Card.Text>
                  Creator: <strong>{card.creator}</strong>
                </Card.Text>
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
    );
  }
};

export default MyProject;
