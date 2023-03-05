import React, { useEffect, useState } from 'react';
import { Modal, Carousel, Image } from 'react-bootstrap';
import state from '../state/index';

const ModalCarousel = ({ modalInfo, onHide }) => {
  const [index, setIndex] = useState(modalInfo.id - 1);

  useEffect(() => {
    setIndex(modalInfo.id - 1);
  }, [modalInfo.id]);

  const data = state[modalInfo.state];

  return (
    <Modal
      show={modalInfo.show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      fullscreen
      style={{ background: '#fff0' }}
    >
      <Modal.Header closeButton className="border-0" />
      <Modal.Body className="p-0 h-100" style={{ background: '#fff0' }}>
        <Carousel
          variant="dark"
          interval={null}
          className="h-100 d-flex align-items-center"
          slide={false}
          activeIndex={index}
          onSelect={(selectedIndex) => setIndex(selectedIndex)}
        >
          {data && data.map((image) => (
            <Carousel.Item key={image.id} className="text-center">
              <Image fluid className="mx-auto" src={image.originalFilePath} alt={image.description} style={{ maxHeight: 500 }} loading="lazy" />
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
    </Modal>
  );
};

export default ModalCarousel;
