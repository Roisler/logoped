import React from 'react';
import {
  Col,
  Row,
  Card,
  Carousel,
  CardGroup,
} from 'react-bootstrap';
import programs from '../assets/educationPrograms';
import chunk from '../assets/chunk';

const programChunks = chunk(programs, 3);

const programCards = programChunks.map((programChunk, i) => (
  // eslint-disable-next-line react/no-array-index-key
  <Carousel.Item key={i} className="mb-5">
    <CardGroup>
      {programChunk.map(({
        description,
        hours,
        year,
        id,
        result,
      }) => (
        <Card key={id} className="border-0">
          <Card.Body style={{ background: '#E0FFFF' }}>
            <Card.Img src="yes2.svg" alt={description} style={{ height: 64, width: 64 }} />
            <Card.Text className="mt-3">{`${description} - ${hours} ${hours > 4 ? 'часов' : 'часа'}`}</Card.Text>
          </Card.Body>
          <Card.Footer className="border-0" style={{ background: '#E0FFFF' }}>{`${year}г. ${result}.`}</Card.Footer>
        </Card>
      ))}
    </CardGroup>
  </Carousel.Item>
));

const AddEducation = () => (
  <Row className="justify-content-center align-content-center">
    <Col xs={12} md={12} xxl={6}>
      <Card id="addEducation" className="mt-5 text-center border-0" style={{ background: '#E0FFFF', minHeight: 550 }}>
        <Card.Body className="row">
          <Card.Text className="h1 my-3">Дополнительное образование</Card.Text>
          <Carousel variant="dark">
            {programCards}
          </Carousel>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default AddEducation;
