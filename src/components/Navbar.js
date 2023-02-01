import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => (
  <Navbar expand="lg" className="m-0" style={{ background: '#E0FFFF' }}>
    <Container fluid>
      <Navbar.Brand href="#"><h2>Бондарчук Дарья</h2></Navbar.Brand>
      <Navbar.Collapse>
        <Nav className="justify-content-center w-100 mx-auto">
          <Nav.Link href="#"><h5>Обо мне</h5></Nav.Link>
          <Nav.Link href="#"><h5>Достижения</h5></Nav.Link>
          <Nav.Link href="#"><h5>Публикации</h5></Nav.Link>
          <Nav.Link href="#"><h5>Родителям</h5></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
