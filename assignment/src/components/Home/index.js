import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Nav, Jumbotron } from "react-bootstrap";
import styled from 'styled-components'
import "./styles.css";

// const StyledJumbotron = styled.Jumbotron`
//     background: #000046;  /* fallback for old browsers */
//     background: -webkit-linear-gradient(to right, #1CB5E0, #000046);  /* Chrome 10-25, Safari 5.1-6 */
//     background: linear-gradient(to right, #1CB5E0, #000046); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
//     color: red;
// `

const Home = () => (
  <div className="app-wrapper">
    <div className="header">
        <Navbar bg="light" expand="lg">
      <div className="container">
            <Navbar.Brand href="#home">IS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Nav className="justify-content-end">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
      </div>
          </Navbar>
    </div>
      <Jumbotron className={styled.jumbotron}>
        <div className="container mt-5 text-center">
          <h1>Bem vindo ao Immigrant Song</h1>
          <p>
            Um simples site onde você pode encontrar todas as informações necessárias sobre um estrangeiro no país.
          </p>
          <img className="mt-5 mb-0"src="http://www.pngmart.com/files/4/Travel-PNG-Image.png"></img>
          <p>
            <Button variant="primary mt-5">Prosseguir</Button>
          </p>
        </div>
      </Jumbotron>
  
  </div>
);

export default Home;
