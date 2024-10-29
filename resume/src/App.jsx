import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './styles/App.module.css'

function App() {

  return (
    <>
    <Container>
      <Row >
        <Col className={styles.Col}>1 of 2</Col>
        <Col className={styles.Col}>2 of 2</Col>
      </Row>
      <Row>
        <Col className={styles.Col}>1 of 1</Col>

      </Row>
    </Container>
      
    </>
  )
}

export default App
