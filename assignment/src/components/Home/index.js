import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Nav, Jumbotron, Container, Row, Col } from "react-bootstrap";
import styled from 'styled-components'
import "./styles.css";

const Home = () => (
  <div className="app-wrapper">
    <div className="header">
      <Navbar defaultActiveKey="/home" bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/home">IS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="justify-content-end">
                <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </div>
      <Jumbotron className="styled-jumbotron">
        <Container className="mt-5 text-center">
          <h1>Bem vindo ao Immigrant Song</h1>
          <p className="mt-3">
            Um simples site onde você pode encontrar todas as informações necessárias sobre um estrangeiro no país.
          </p>
          <p>
          <Button href="#" variant="outline-primary my-4" size="lg">Prosseguir</Button>
          </p>
          <img variant="mt-5 mb-0" src="http://www.pngmart.com/files/4/Travel-PNG-Image.png"></img>
        </Container>
      </Jumbotron>
    <div>
      <Container>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default Home;
