import React from 'react';
import {
  Row,
  Col,
  Card,
  CardGroup,
} from 'react-bootstrap';
import publications from '../assets/publications';
import chunk from '../assets/chunk';

const publicationsChunk = chunk(publications, 4);

const generatePublications = publicationsChunk.map((publicationChunk, i) => (
  // eslint-disable-next-line react/no-array-index-key
  <CardGroup key={i} className="mt-4 text-center">
    {publicationChunk.map((publication) => (
      <Card key={publication.id} className="border-0 mx-auto">
        <Card.Body className="theme">
          <a href={publication.path} target="_blank" rel="noreferrer">
            <Card.Img src="pdf.svg" style={{ maxWidth: 64 }} />
          </a>
          <Card.Text className="mt-3">{publication.description}</Card.Text>
        </Card.Body>
      </Card>
    ))}
  </CardGroup>
));

const Publications = () => (
  <Row className="justify-content-center align-content-center m-0">
    <Col xs={12} md={12} xxl={6} className="p-0">
      <Card id="publications" className="w-100 text-center border-0">
        <Card.Body className="row">
          <Card.Text className="h1 my-3">Публикации</Card.Text>
          <CardGroup className="mt-4">
            {generatePublications}
          </CardGroup>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default Publications;
