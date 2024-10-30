import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './styles/App.module.css';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import profilepic from './assets/profilepic.jpg'
import NavBar from './components/NavBar';
import HeroImage from './components/HeroImage';

function App() {
  

  return (
    <>
    <NavBar />
    <HeroImage />
    </>
  );
}

export default App;
