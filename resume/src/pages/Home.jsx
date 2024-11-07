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

  // Detect screen width to toggle autoplay behavior
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
        {/* TRI HUB */}
        <Row className="justify-content-center text-center">
          <Col>
            <Card
              className={styles.card}
              onMouseEnter={handleMouseEnterVideo1}
              onMouseLeave={handleMouseLeaveVideo1}
              onClick={() => setShowTriHub(true)}
            >
              <video
                ref={videoRef1}
                className={styles.video}
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
                  TriHub is a comprehensive platform created by Martin Bradbury,
                  designed to serve the diverse needs of the triathlon
                  community...
                  <br />
                  <br />
                  <h1>Technologies Used:</h1>
                  <strong>
                    Frontend: React, Axios, React Bootstrap Backend: Python,
                    Django REST Additional Features: Responsive design
                  </strong>
                </p>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
          <Col>
            <Card className={styles.cardBodyText}>
              <Card.Body>
                <Card.Title>Tri Hub</Card.Title>
                <Card.Text>
                  A Full Stack project using React.js front end and Django REST
                  back end.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* WALKING THE WAINWRIGHTS */}
        <Row className="justify-content-center text-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <Card
              className={styles.card}
              onClick={() => setShowWainwrights(true)}
            >
              <img
                className={styles.image}
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
                <p>
                  Walking the Wainwrights...
                  <br />
                  <br />
                  <h1>Technologies Used:</h1>
                  <strong>
                    Frontend: React, Axios, React Bootstrap Backend: Python,
                    Django REST Additional Features: Responsive design
                  </strong>
                </p>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
          <Col>
            <Card className={styles.cardBodyText}>
              <Card.Body>
                <Card.Title>Walking the Wainwrights</Card.Title>
                <Card.Text>
                  A Full Stack project using React.js front end and Django REST
                  back end.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Soul Roll Project */}
        <Row className="justify-content-center text-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <Card className={styles.card} onClick={() => setShowSoulRoll(true)}>
              <img
                className={styles.image}
                alt="soul roll image"
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
                <p>
                  SoulRoll Python project...
                  <br />
                  <br />
                  <h1>Technologies Used:</h1>
                  <strong>
                    Frontend: React, Axios, React Bootstrap Backend: Python,
                    Django REST Additional Features: Responsive design
                  </strong>
                </p>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
          <Col>
            <Card className={styles.cardBodyText}>
              <Card.Body>
                <Card.Title>SoulRoll - Python Project</Card.Title>
                <Card.Text>
                  A Full Stack project using React.js front end and Django REST
                  back end.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Science Quiz */}
        <Row className="justify-content-center text-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <Card
              className={styles.card}
              onClick={() => setShowScienceQuiz(true)}
            >
              <img
                className={styles.image}
                alt="science quiz image"
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
                <p>
                  Science Quiz - JavaScript project...
                  <br />
                  <br />
                  <h1>Technologies Used:</h1>
                  <strong>
                    Frontend: React, Axios, React Bootstrap Backend: Python,
                    Django REST Additional Features: Responsive design
                  </strong>
                </p>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
          <Col>
            <Card className={styles.cardBodyText}>
              <Card.Body>
                <Card.Title>Science Quiz - JavaScript Project</Card.Title>
                <Card.Text>
                  A Full Stack project using React.js front end and Django REST
                  back end.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Photography */}
        <Row className="justify-content-center text-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <Card
              className={styles.card}
              onClick={() => setShowPhotography(true)}
            >
              <img
                className={styles.image}
                alt="wildlife photography image"
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
                <p>
                  MEB Wildlife Photography project...
                  <br />
                  <br />
                  <h1>Technologies Used:</h1>
                  <strong>
                    Frontend: React, Axios, React Bootstrap Backend: Python,
                    Django REST Additional Features: Responsive design
                  </strong>
                </p>
              </Offcanvas.Body>
            </Offcanvas>
          </Col>
          <Col>
            <Card className={styles.cardBodyText}>
              <Card.Body>
                <Card.Title>MEB Wildlife Photography</Card.Title>
                <Card.Text>
                  A Full Stack project using React.js front end and Django REST
                  back end.
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
