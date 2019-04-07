import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Nav, Jumbotron, Container, Row, Col } from "react-bootstrap";
import styled from 'styled-components'
import "./styles.css";

const StyledJumbotron = styled(Jumbotron)`
  background-color: transparent;
`;

const StyledButton = styled(Button)`
background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
`;

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
      <StyledJumbotron>
        <Container className="mt-5 text-center justify-content-center">
          <h1>Bem vindo ao Immigrant Song</h1>
          <p className="mt-3">
            Um simples site onde você pode encontrar todas as informações necessárias sobre um estrangeiro no país.
          </p>
          <p>
          <Button href="#" variant="outline-primary my-4" size="lg">Prosseguir</Button>
          </p>
        <img src="" className="projectImage"></img>
          {/* <img variant="mt-5 mb-0" src="http://www.pngmart.com/files/4/Travel-PNG-Image.png"></img> */}
        </Container>
      </StyledJumbotron>
    <div id="aboutContent">
      <Container>
        <Row>
          <Col md={6}><img className="projectImage" src="https://png2.kisspng.com/sh/9d391a12c12529cc6b03e6b1bac5b725/L0KzQYm3UsI5N5ZofZH0aYP2gLBuTfJ2e5pzfeV8LXfycb20ggBxdJYyjtdsdHB1PbP8kBlvbaR4ReJub4DvdX7wkB9ubaV3gdU2NXG8Roq8gck3PZZofqc3M0i4R4m6WMgyPWIAUKMDMUW2RIKAVb5xdpg=/kisspng-business-goal-apple-vector-business-people-isometric-5a9695a965ecf5.3857838815198181534175.png"></img></Col>
          <Col md={6} className="align-self-center">
            <p class="contentTitle">Sobre Immigrant Song</p>
            <p>Aqui você pode encontrar diversas informações sobre um estrangeiro no país,
              como data de entrada e saída, número de seu passaporte, nacionalidade, entre outras.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="align-self-center">
            <p class="contentTitle">Sobre este Projeto</p>
            <p>Esta plataforma foi desenvolvida como um trabalho integrado, para as disciplinas
              de Engenharia de Software 2 e Desenvolvimento Web. Durante o desenvolvimento deste trabalho, utilizamos todo nosso conhecimento adquirido
            durante o semestre, deixando nosso lado criativo fluir para a construção de um site simples e 
            atrativo.
            </p>
          </Col>
          <Col md={6}><img src="http://hackncs.com/img/project.png" className="projectImage"></img></Col>
        </Row>
        <Row>
          <Col md={6}><img src="http://hackncs.com/img/team.png" className="projectImage"></img></Col>
          <Col md={6} className="align-self-center">
          <p class="contentTitle">Nossa Equipe</p>
          <p>Todos os integrantes do grupo fizeram parte de cada uma das atividades do projeto,
            trabalhando ao máximo para que esse projeto fosse algo criado por nós, deixando a marca
            de cada um e construindo algo que pudéssemos nos orgulhar.
          </p></Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default Home;
