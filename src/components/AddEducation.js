import React, { useState } from 'react';
import {
  Row,
  Col,
  Card,
  Carousel,
  Image,
  Button,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import chunk from '../utilities/chunk';
import state from '../assets/state';
import ModalCarousel from './ModalCarousel';
import EducationList from './AddEducationsList';

const { education } = state;
const addEducationsChunk = chunk(education, 4);

const Achievements = () => {
  const { t } = useTranslation();
  const [modalInfo, setModalInfo] = useState({ show: false, state: null, id: 0 });
  return (
    <>
      <Row className="justify-content-center align-content-center m-0">
        <Col xs={12} md={12} xxl={6} className="p-0">
          <Card id="education" className="text-center border-0 w-100">
            <Card.Body className="row">
              <Card.Text className="h1 my-5">{t('education.add_education')}</Card.Text>
              <Carousel variant="dark" interval={null}>
                {addEducationsChunk.map((imagePathChunk, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Carousel.Item key={i} className="mb-5">
                    <Row xs={1} sm={2} md={5} className="mx-5 justify-content-center align-content-center">
                      {imagePathChunk.map((imagePath) => (
                        <Col key={imagePath.id}>
                          <Button className="p-0" variant="light" onClick={() => setModalInfo({ show: true, state: 'education', id: imagePath.id })}>
                            <Image fluid src={imagePath.path} style={{ maxHeight: 160 }} loading="lazy" />
                          </Button>
                        </Col>
                      ))}
                    </Row>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Card.Body>
          </Card>
        </Col>
        <EducationList />
      </Row>
      <ModalCarousel
        modalInfo={modalInfo}
        onHide={() => setModalInfo({ show: false, id: 0 })}
      />
    </>
  );
};

export default Achievements;
