import React, { useState } from 'react';
import {
  Row,
  Col,
  Card,
  Image,
  Button,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import state from '../state/index';
import ModalCarousel from './ModalCarousel';

const Ach = () => {
  const { achievements } = state;
  const [modalInfo, setModalInfo] = useState({ show: false, state: null, id: 0 });
  return (
    <>
      <Row className="text-center w-100 m-0">
        {achievements.map(({ id, path }) => (
          <Col key={id} className="p-0">
            <Button variant="light" className="p-1 theme border-0" onClick={() => setModalInfo({ show: true, state: 'achievements', id })}>
              <Image src={path} style={{ maxHeight: 160 }} alt="dfsdfsd" />
            </Button>
          </Col>
        ))}
      </Row>
      <ModalCarousel
        modalInfo={modalInfo}
        onHide={() => setModalInfo({ show: false, id: 0 })}
      />
    </>
  );
};

const Achievements = () => {
  const { t } = useTranslation();
  const [modalInfo, setModalInfo] = useState({ show: false, state: null, id: 0 });
  return (
    <>
      <Row className="justify-content-center align-content-center m-0">
        <Col xs={12} md={12} xxl={6} className="p-0">
          <Card id="achievements" className="text-center border-0 w-100">
            <Card.Body className="row p-2">
              <Card.Text className="h1 my-5">{t('achievements.sertificats_awards')}</Card.Text>
              <Ach />
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
