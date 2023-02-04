import React, { useState } from 'react';
import {
  Row,
  Col,
  Card,
  Carousel,
  Image,
  Button,
} from 'react-bootstrap';
import chunk from '../assets/chunk';
import imagePaths from '../assets/imagePaths';
import ModalImage from './ModalImage';

const imagePathChunks = chunk(imagePaths, 5);

const Achievements = () => {
  const [modalInfo, setModalInfo] = useState({ show: false, image: null });
  return (
    <>
      <Row className="justify-content-center align-content-center m-0">
        <Col xs={12} md={12} xxl={6} className="p-0">
          <Card id="achievements" className="text-center border-0 w-100">
            <Card.Body className="row">
              <Card.Text className="h1 my-5">Сертификаты и награды</Card.Text>
              <Carousel variant="dark" slide>
                {imagePathChunks.map((imagePathChunk, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <Carousel.Item key={i} className="mb-5">
                    {imagePathChunk.map((imagePath) => (
                      <Button key={imagePath.id} variant="light" onClick={() => setModalInfo({ show: true, image: imagePath.originalFilePath })}>
                        <Image className="mx-1" src={imagePath.path} style={{ maxWidth: 200 }} loading="lazy" />
                      </Button>
                    ))}
                  </Carousel.Item>
                ))}
              </Carousel>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <ModalImage modalInfo={modalInfo} onHide={() => setModalInfo({ show: false, image: null })} />
    </>
  );
};

export default Achievements;
