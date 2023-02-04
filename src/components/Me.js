import React from 'react';
import {
  Card,
  Col,
  Button,
  Row,
  Image,
} from 'react-bootstrap';

const Me = () => (
  <Row className="justify-content-center h-100 m-0">
    <Col xs={12} md={12} xxl={6} className="p-0">
      <Card id="me" className="h-100 text-left border-0 w-100">
        <Card.Body className="row">
          <Col className="d-flex flex-column justify-content-center mx-5">
            <Card.Text className="h5">Сайт учителя-логопеда</Card.Text>
            <Card.Text className="h1">Бондарчук Дарья Анатольевна</Card.Text>
            <Card.Text className="mt-5">Здесь вы найдете информацию обо мне, материалы для учеников и новости для родителей.</Card.Text>
            <Button variant="outline-success" className="w-10">Обратная связь</Button>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <Image src="Darya.jpg" className="w-75 ml-5 mt-5" alt="Фотография учителя-логопеда" />
          </Col>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default Me;
