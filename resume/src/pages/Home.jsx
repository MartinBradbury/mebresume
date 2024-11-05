import React, { useRef, useState, useEffect } from "react";
import HeroImage from "../components/HeroImage";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import Card from "react-bootstrap/Card";
import video from "../assets/trihub2.mp4";
import video2 from "../assets/trihub.mp4";

function Home() {
  const videoRef1 = useRef(null); // Ref for the first video
  const videoRef2 = useRef(null); // Ref for the second video

  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width to toggle autoplay behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 770);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen for screen resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup listener on component unmount
  }, []);

  const handleMouseEnterVideo1 = () => {
    if (!isMobile) {
      videoRef1.current.play(); // Play the first video on mouse enter (desktop only)
    }
  };

  const handleMouseLeaveVideo1 = () => {
    if (!isMobile) {
      videoRef1.current.pause(); // Pause the first video on mouse leave (desktop only)
      videoRef1.current.currentTime = 0; // Reset video to start
    }
  };

  const handleMouseEnterVideo2 = () => {
    if (!isMobile) {
      videoRef2.current.play(); // Play the second video on mouse enter (desktop only)
    }
  };

  const handleMouseLeaveVideo2 = () => {
    if (!isMobile) {
      videoRef2.current.pause(); // Pause the second video on mouse leave (desktop only)
      videoRef2.current.currentTime = 0; // Reset video to start
    }
  };

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);

  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);

  return (
    <div>
      <HeroImage />
      <Container fluid className={styles.bg} id="projects">
        <Row className="justify-content-center text-center">
          <Col>
            <Card
              className={styles.card}
              onMouseEnter={handleMouseEnterVideo1}
              onMouseLeave={handleMouseLeaveVideo1}
              onClick={handleShow} // Click to show Offcanvas
            >
              <video
                ref={videoRef1} // Attach the ref to the video element
                className={styles.video}
                muted
                loop
                playsInline
                webkit-playsinline="true"
                autoPlay={isMobile} // Autoplay on mobile only
                alt="triathlon background video"
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Card>
            {/* Offcanvas Component */}
            <Offcanvas
              className={styles.canvas}
              show={show}
              onHide={handleClose}
            >
              <Offcanvas.Header className={styles.whiteCloseButton} closeButton>
                <Offcanvas.Title className={styles.canvasTitle}>
                  <p>Tri Hub</p>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <p>
                  TriHub is a comprehensive platform created by Martin Bradbury,
                  designed to serve the diverse needs of the triathlon
                  community. It aims to bring together triathletes of all skill
                  levels by offering a range of features, including performance
                  tracking, customizable training plans, and a vibrant social
                  space for sharing experiences. The platform emphasizes user
                  engagement, providing tools for setting goals, interacting
                  with the community, and staying updated with the latest
                  industry news. TriHub's design focuses on accessibility and
                  usability for competitive athletes, casual participants, and
                  newcomers alike. The platform features a responsive layout and
                  a clean, straightforward color scheme, ensuring a seamless
                  experience across all devices. Continuous improvement is a
                  priority, with future updates planned to enhance user
                  satisfaction and expand platform capabilities.
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

            {/* Additional Cards */}
          </Col>
          <Col>
            <Card className={styles.cardBodyText}>
              <Card.Body>
                <Card.Title className={styles.cardBodyTextPosition}>
                  Tri Hub
                </Card.Title>
                <Card.Text>
                  A Full Stack project using React.js front end and Django REST
                  back end.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            <Card
              className={styles.card}
              onMouseEnter={handleMouseEnterVideo1}
              onMouseLeave={handleMouseLeaveVideo1}
              onClick={handleShow} // Click to show Offcanvas
            >
              <video
                ref={videoRef1} // Attach the ref to the video element
                className={styles.video}
                muted
                loop
                playsInline
                webkit-playsinline="true"
                autoPlay={isMobile} // Autoplay on mobile only
                alt="triathlon background video"
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Card>
            {/* Offcanvas Component */}
            <Offcanvas
              className={styles.canvas}
              show={show}
              onHide={handleClose}
            >
              <Offcanvas.Header className={styles.whiteCloseButton} closeButton>
                <Offcanvas.Title className={styles.canvasTitle}>
                  <p>Tri Hub</p>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <p>
                  TriHub is a comprehensive platform created by Martin Bradbury,
                  designed to serve the diverse needs of the triathlon
                  community. It aims to bring together triathletes of all skill
                  levels by offering a range of features, including performance
                  tracking, customizable training plans, and a vibrant social
                  space for sharing experiences. The platform emphasizes user
                  engagement, providing tools for setting goals, interacting
                  with the community, and staying updated with the latest
                  industry news. TriHub's design focuses on accessibility and
                  usability for competitive athletes, casual participants, and
                  newcomers alike. The platform features a responsive layout and
                  a clean, straightforward color scheme, ensuring a seamless
                  experience across all devices. Continuous improvement is a
                  priority, with future updates planned to enhance user
                  satisfaction and expand platform capabilities.
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

            {/* Additional Cards */}
          </Col>
          <Col>
            <Card className={styles.cardBodyText}>
              <Card.Body>
                <Card.Title className={styles.cardBodyTextPosition}>
                  Tri Hub
                </Card.Title>
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
