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

const { achievements } = state;
const achievementChunks = chunk(achievements, 4);

const Achievements = () => {
  const { t } = useTranslation();
  const [modalInfo, setModalInfo] = useState({ show: false, state: null, id: 0 });
  return (
    <>
      <Row className="justify-content-center align-content-center m-0">
        <Col xs={12} md={12} xxl={6} className="p-0">
          <Card id="achievements" className="text-center border-0 w-100">
            <Card.Body className="row">
              <Card.Text className="h1 my-5">{t('achievements.sertificats_awards')}</Card.Text>
              <Carousel variant="dark" interval={null}>
                {achievementChunks.map((imagePathChunk, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Carousel.Item key={i} className="mb-5 theme">
                    <Row xs={1} sm={2} md={5} className="mx-5 justify-content-center align-content-center">
                      {imagePathChunk.map((imagePath) => (
                        <Col key={imagePath.id}>
                          <Button className="theme p-0" variant="light" onClick={() => setModalInfo({ show: true, state: 'achievements', id: imagePath.id })}>
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
      </Row>
      <ModalCarousel
        modalInfo={modalInfo}
        onHide={() => setModalInfo({ show: false, id: 0 })}
      />
    </>
  );
};

export default Achievements;
