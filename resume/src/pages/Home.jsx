import React, { useRef, useState, useEffect } from "react";
import HeroImage from "../components/HeroImage";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Card from "react-bootstrap/Card";
import video from "../assets/trihub2.mp4";
import wainwrights from "../assets/wainwrights.png";
import mebwildlife from "../assets/mebwildlife.png";
import sciencequiz from "../assets/sciencequiz.webp";
import soulroll from "../assets/soulroll.png";

function Home() {
  const videoRef1 = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 770);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnterVideo1 = () => {
    if (!isMobile) {
      videoRef1.current.play();
    }
  };

  const handleMouseLeaveVideo1 = () => {
    if (!isMobile) {
      videoRef1.current.pause();
      videoRef1.current.currentTime = 0;
    }
  };

  const [showTriHub, setShowTriHub] = useState(false);
  const [showWainwrights, setShowWainwrights] = useState(false);
  const [showSoulRoll, setShowSoulRoll] = useState(false);
  const [showScienceQuiz, setShowScienceQuiz] = useState(false);
  const [showPhotography, setShowPhotography] = useState(false);

  return (
    <div>
      <HeroImage />
      <Container fluid className={styles.bg} id="projects">
        {/* Project Cards */}
        <Row className="justify-content-center text-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <Card
              className={`${styles.card} d-flex align-items-center justify-content-center`}
              onMouseEnter={handleMouseEnterVideo1}
              onMouseLeave={handleMouseLeaveVideo1}
              onClick={() => setShowTriHub(true)}
            >
              <video
                ref={videoRef1}
                className={`${styles.video}`}
                muted
                loop
                playsInline
                autoPlay={isMobile}
                alt="triathlon background video"
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Card>
            <Offcanvas
              className={styles.canvas}
              show={showTriHub}
              onHide={() => setShowTriHub(false)}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Tri Hub</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <p>
                  TriHub is a platform created for the triathlon community...
                </p>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
          <Col>
            <Card
              className={`${styles.cardBodyText} d-flex align-items-center justify-content-center`}
            >
              <Card.Body className="text-center">
                <Card.Title>Tri Hub</Card.Title>
                <Card.Text>
                  A Full Stack project using React and Django REST.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center text-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <Card
              className={`${styles.card} d-flex align-items-center justify-content-center`}
              onClick={() => setShowWainwrights(true)}
            >
              <img
                className={`${styles.image} d-block mx-auto`}
                alt="walking the wainwrights image"
                src={wainwrights}
              />
            </Card>
            <Offcanvas
              className={styles.canvas}
              show={showWainwrights}
              onHide={() => setShowWainwrights(false)}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Walking the Wainwrights</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <p>Walking the Wainwrights project details...</p>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
          <Col>
            <Card
              className={`${styles.cardBodyText} d-flex align-items-center justify-content-center`}
            >
              <Card.Body className="text-center">
                <Card.Title>Walking the Wainwrights</Card.Title>
                <Card.Text>
                  A Full Stack project using React and Django REST.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <Card
              className={`${styles.card} d-flex align-items-center justify-content-center`}
              onClick={() => setShowSoulRoll(true)}
            >
              <img
                className={`${styles.image} d-block mx-auto`}
                alt="soulroll image"
                src={soulroll}
              />
            </Card>
            <Offcanvas
              className={styles.canvas}
              show={showSoulRoll}
              onHide={() => setShowSoulRoll(false)}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>SoulRoll</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <p>SoulRoll project details...</p>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
          <Col>
            <Card
              className={`${styles.cardBodyText} d-flex align-items-center justify-content-center`}
            >
              <Card.Body className="text-center">
                <Card.Title>SoulRoll - Python Project</Card.Title>
                <Card.Text>
                  A Full Stack project using React and Django REST.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <Card
              className={`${styles.card} d-flex align-items-center justify-content-center`}
              onClick={() => setShowScienceQuiz(true)}
            >
              <img
                className={`${styles.image} d-block mx-auto`}
                alt="soulroll image"
                src={sciencequiz}
              />
            </Card>
            <Offcanvas
              className={styles.canvas}
              show={showScienceQuiz}
              onHide={() => setShowScienceQuiz(false)}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Science Quiz</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <p>Science Quiz project details...</p>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
          <Col>
            <Card
              className={`${styles.cardBodyText} d-flex align-items-center justify-content-center`}
            >
              <Card.Body className="text-center">
                <Card.Title>Science Quiz - Python Project</Card.Title>
                <Card.Text>
                  A Full Stack project using React and Django REST.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <Card
              className={`${styles.card} d-flex align-items-center justify-content-center`}
              onClick={() => setShowPhotography(true)}
            >
              <img
                className={`${styles.image} d-block mx-auto`}
                alt="soulroll image"
                src={mebwildlife}
              />
            </Card>
            <Offcanvas
              className={styles.canvas}
              show={showPhotography}
              onHide={() => setShowPhotography(false)}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>MEB Wildlife Photography</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <p>MEB Wildlife Photography project details...</p>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
          <Col>
            <Card
              className={`${styles.cardBodyText} d-flex align-items-center justify-content-center`}
            >
              <Card.Body className="text-center">
                <Card.Title>MEB Wildlife Photography - HTML / CSS</Card.Title>
                <Card.Text>
                  A Full Stack project using React and Django REST.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
