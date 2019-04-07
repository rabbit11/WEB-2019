import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Nav, Jumbotron, Container, Row, Col } from "react-bootstrap";
import styled from 'styled-components'
import "./styles.css";

// const Jumbotron = styled.Jumbotron`
//   border: 1px solid red
// `

const Home = () => (
  <div className="app-wrapper">
    <div className="header">
      <Navbar defaultActiveKey="/home" fixed="top">
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
          <Col md={6}><img src="http://hackncs.com/img/project.png" id="projectImage"></img></Col>
          <Col md={6} className="align-self-center">
            <p class="contentTitle">Sobre este Projeto</p>
            <p>Essa plataforma foi desenvolvida como um trabalho integrado, para as disciplinas
              de Engenharia de Software 2 e Desenvolvimento Web. Durante o desenvolvimento deste trabalho, utilizamos todo nosso conhecimento adquirido
            durante o semestre, deixando nosso lado criativo fluir para a construção de um site simples e 
            atrativo.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="align-self-center">
          <p class="contentTitle">Nossa Equipe</p>
          <p>Todos os integrantes do grupo fizeram parte de cada uma das atividades do projeto,
            trabalhando ao máximo para que esse projeto fosse algo criado por nós, deixando a marca
            de cada um, do seu jeito e construir algo que pudéssemos nos orgulhar.
          </p></Col>
          <Col md={6}><img src="http://hackncs.com/img/team.png"></img></Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default Home;
