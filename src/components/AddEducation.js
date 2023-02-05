import React from 'react';
import {
  Col,
  Row,
  Card,
  Carousel,
  CardGroup,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import programs from '../assets/educationPrograms';
import chunk from '../assets/chunk';

const programChunks = chunk(programs, 3);

const ProgramCards = ({ t }) => (
  <Carousel variant="dark" data-bs-interval="false">
    {programChunks.map((programChunk, i) => (
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
              <Card.Body>
                <Card.Img src="yes2.svg" alt={description} style={{ height: 64, width: 64 }} />
                <Card.Text className="mt-3">{`${description} - ${t('hour.hourWithCount', { count: hours })}`}</Card.Text>
              </Card.Body>
              <Card.Footer className="border-0">{`${year}г. ${result}.`}</Card.Footer>
            </Card>
          ))}
        </CardGroup>
      </Carousel.Item>
    ))}
  </Carousel>
);

const AddEducation = () => {
  const { t } = useTranslation();
  return (
    <Row className="justify-content-center align-content-center m-0">
      <Col xs={12} md={12} xxl={6} className="p-0">
        <Card id="addEducation" className="mt-5 text-center border-0">
          <Card.Body className="row">
            <Card.Text className="h1 my-3">{t('education.add_education')}</Card.Text>
            <ProgramCards t={t} />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default AddEducation;
