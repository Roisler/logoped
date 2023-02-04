import React from 'react';
import {
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import publications from '../assets/publications';
import generateCards from '../assets/generateCards';

const publicationsFileListCards = generateCards(publications);

const Publications = () => (
  <Row className="justify-content-center align-content-center m-0">
    <Col xs={12} md={12} xxl={6} className="p-0">
      <Card id="publications" className="w-100 text-center border-0">
        <Card.Body className="row">
          <Card.Text className="h1 my-5">Публикации</Card.Text>
          <Row xs={2} sm={3} md={4}>
            {publicationsFileListCards}
          </Row>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default Publications;
