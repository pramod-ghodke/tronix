import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import '../App.css';

const Footer = () => {
  return (
    <footer className='pt-5 pb-5'>
        <Container fluid>
            <Row>
            <Col md={4}>
            <LinkContainer to="/"><a className="logo">Tronix<span>365</span></a></LinkContainer>
            <p>We are the huslter for progress of youth. Pune based edtech startup with young enterprenureship and energetic attitude towards youth mindset</p>
            </Col>
            </Row>
        </Container>

    </footer>
  )
}

export default Footer;