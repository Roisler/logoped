import React from 'react';
import { Col, Card } from 'react-bootstrap';

const generateCards = (data, theme = null) => data.map((element) => (
  <Col key={element.id}>
    <Card className="border-0 mx-auto mt-4 p-0">
      <Card.Body className={theme}>
        <a href={element.path} target="_blank" rel="noreferrer">
          <Card.Img src="pdf.svg" style={{ maxWidth: 64 }} />
        </a>
        <Card.Text className="mt-3 mb-3">{element.description}</Card.Text>
      </Card.Body>
    </Card>
  </Col>
));

export default generateCards;
