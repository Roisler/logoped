import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Navigation from './components/Navbar';
import Me from './components/Me';
import AddEducation from './components/AddEducation';
import Achievements from './components/Achievements';
import Publications from './components/Publications';
import Parents from './components/Parents';
import Footer from './components/Footer';

const App = () => (
  <Container fluid className="w-100" style={{ padding: 1 }}>
    <Navigation />
    <Me />
    <AddEducation />
    <Achievements />
    <Publications />
    <Parents />
    <Footer />
  </Container>
);

export default App;
