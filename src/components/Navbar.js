import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const { t } = useTranslation();
  const items = ['education', 'achievements', 'publications', 'parents'];

  return (
    <Navbar expand="lg" className="m-0 theme">
      <Container fluid>
        <Navbar.Brand href="#">
          <h2>
            <img src="book.svg" alt={t('basic.logo')} style={{ height: 50, width: 50 }} />
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="menu" />
        <Navbar.Collapse id="menu">
          <Nav className="justify-content-center w-100 mx-auto">
            <Nav.Link href="#me" data-bs-toggle="collapse"><h5>{t('basic.about_me')}</h5></Nav.Link>
            {items.map((item) => (
              <Nav.Link key={item} href={`#${item}`} data-bs-toggle="collapse"><h5>{t(`${item}.${item}`)}</h5></Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
