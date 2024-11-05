import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/HeroImage.module.css";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import profilepic from "../assets/profilepic.jpg";

function HeroImage() {
  const [visible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000); // Short delay to trigger transition
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className={styles.heroBg}>
        <Container className={styles.testing}>
          <Row>
            <Col className={styles.Col}>
              <Card
                className={`${styles.CardOne} ${visible ? styles.visible : ""}`}
              >
                <img className={styles.img} variant="top" src={profilepic} />
              </Card>
            </Col>
            <Col className={styles.Col}>
              <Card
                className={`${styles.CardTwo} ${visible ? styles.visible : ""}`}
              >
                <Card.Body>
                  <Card.Title className={styles.CardText}>
                    <h1>Martin Bradbury</h1>
                  </Card.Title>
                  <Card.Text className={styles.CardText}>
                    <h3>Junior Software Developer</h3>
                    <h5>Phone:</h5>
                    <p>+44 07464595295</p>
                    <h5>email:</h5>
                    <p>martinbradbury@btinternet.com</p>
                    <h5>Address:</h5>
                    <p>Lincoln, England</p>
                    <h5>Date of Birth:</h5>
                    <p>20-10-1982</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Row className={styles.linksContainer}>
          <Col>
            <Card
              className={`${styles.CardThree} ${visible ? styles.visible : ""}`}
            >
              <Card.Body>
                <Card.Text className={styles.links}>
                  <p>
                    <i class="fa-brands fa-instagram"></i>Instagram
                  </p>
                  <p>
                    <i class="fa-brands fa-linkedin"></i>LinkedIn
                  </p>
                  <p>
                    <i class="fa-brands fa-youtube"></i>YouTube
                  </p>
                  <p>
                    <i class="fa-brands fa-facebook"></i>Facebook
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default HeroImage;
