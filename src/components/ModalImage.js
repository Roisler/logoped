import React from 'react';
import { Modal, Image } from 'react-bootstrap';

const ModalImage = ({ modalInfo, onHide }) => (
  <Modal
    show={modalInfo.show}
    onHide={onHide}
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header className="border-0" style={{ display: 'none' }} />
    <Modal.Body className="p-0">
      <Image src={modalInfo.image} alt="Изображение" className="w-100 mx-auto d-block" loading="lazy" />
    </Modal.Body>
  </Modal>
);

export default ModalImage;
