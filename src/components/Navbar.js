import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => (
  <Navbar expand="lg" className="m-0 theme">
    <Container fluid>
      <Navbar.Brand href="#">
        <h2>
          <img src="book.svg" alt="Логотип" style={{ height: 50, width: 50 }} />
        </h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="menu" />
      <Navbar.Collapse id="menu">
        <Nav className="justify-content-center w-100 mx-auto">
          <Nav.Link href="#me" data-bs-toggle="collapse"><h5>Обо мне</h5></Nav.Link>
          <Nav.Link href="#addEducation" data-bs-toggle="collapse"><h5>Образование</h5></Nav.Link>
          <Nav.Link href="#achievements" data-bs-toggle="collapse"><h5>Достижения</h5></Nav.Link>
          <Nav.Link href="#publications" data-bs-toggle="collapse"><h5>Публикации</h5></Nav.Link>
          <Nav.Link href="#parents"><h5>Родителям</h5></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
