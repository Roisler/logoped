import React from 'react';
import {
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import publications from '../assets/publications';
import generateCards from '../assets/generateCards';

const parentsFileListCards = generateCards(publications, 'theme');

const Parents = () => (
  <Row className="m-0">
    <Col xs={12} md={12} xxl={6} className="p-0">
      <Card id="parents" className="mt-2 text-center border-0">
        <Card.Body className="row">
          <Card.Text className="h1 my-5">Родителям</Card.Text>
          <Row xs={2} sm={3} md={4}>
            {parentsFileListCards}
          </Row>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default Parents;
