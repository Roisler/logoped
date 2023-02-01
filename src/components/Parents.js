import React from 'react';
import {
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import publications from '../assets/publications';
import chunk from '../assets/chunk';

const parentsChunks = chunk(publications, 6);

const generateParents = parentsChunks.map((parentChunk, i) => (
  // eslint-disable-next-line react/no-array-index-key
  <Row key={i} xs={1} md={2}>
    {parentChunk.map((parent) => (
      <Card key={parent.id} className="border-0 mx-auto p-0">
        <Card.Body>
          <a href={parent.path} target="_blank" rel="noreferrer">
            <Card.Img src="pdf.svg" style={{ maxWidth: 64 }} />
          </a>
          <Card.Text className="mt-3">{parent.description}</Card.Text>
        </Card.Body>
      </Card>
    ))}
  </Row>
));

const Parents = () => (
  <Row className="justify-content-center align-content-center">
    <Col xs={12} md={12} xxl={6}>
      <Card id="parents" className="mt-2 text-center border-0">
        <Card.Body className="row">
          <Card.Text className="h1 my-3">Родителям</Card.Text>
          {generateParents}
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default Parents;
