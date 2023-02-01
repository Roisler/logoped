import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => (
  <Navbar expand="lg" className="m-0" style={{ background: '#E0FFFF' }}>
    <Container fluid>
      <Navbar.Brand href="#"><h2>Бондарчук Дарья</h2></Navbar.Brand>
      <Navbar.Collapse>
        <Nav className="justify-content-center w-100 mx-auto">
          <Nav.Link href="#about"><h5>Обо мне</h5></Nav.Link>
          <Nav.Link href="#addEducation"><h5>Образование</h5></Nav.Link>
          <Nav.Link href="#achievements"><h5>Достижения</h5></Nav.Link>
          <Nav.Link href="#publications"><h5>Публикации</h5></Nav.Link>
          <Nav.Link href="#parents"><h5>Родителям</h5></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
