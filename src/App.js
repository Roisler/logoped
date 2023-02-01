import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Navigation from './components/Navbar';
import Me from './components/Me';
import About from './components/About';
import AddEducation from './components/AddEducation';
import Achievements from './components/Achievements';

const App = () => (
  <Container fluid className="w-100">
    <Navigation />
    <Me />
    <About />
    <AddEducation />
    <Achievements />
  </Container>
);

export default App;
