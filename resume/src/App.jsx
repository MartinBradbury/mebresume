import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './styles/App.module.css';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';

function App() {
  const [visible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000); // Short delay to trigger transition
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <Row>
        <Col className={styles.Col}>
          <Card className={`${styles.CardOne} ${visible ? styles.visible : ''}`}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className={styles.Col}>
          <Card className={`${styles.CardTwo} ${visible ? styles.visible : ''}`}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
      <Col className={styles.Col}>
      <Card className={`${styles.CardThree} ${visible ? styles.visible : ''}`}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
      </Col>
      </Row>
    </Container>
  );
}

export default App;
