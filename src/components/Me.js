import React, { useState } from 'react';
import {
  Card,
  Col,
  Button,
  Row,
  Image,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ModalFeedback from './ModalFeedback';

const Me = () => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <Row className="m-0">
        <Col className="p-0">
          <Card id="me" className="h-100 border-0 w-100 text-right">
            <Card.Body className="row row-cols-1 row-cols-md-2">
              <Col className="d-flex flex-column text-justify">
                <Card.Text className="h5 mt-3">{t('basic.site')}</Card.Text>
                <Card.Text className="h1">{t('basic.name_surname')}</Card.Text>
                <Card.Text className="mt-3">
                  <span>
                    <b>{`${t('education.education')}:`}</b>
                  </span>
                  <br />
                  <span>
                    {t('education.university')}
                  </span>
                </Card.Text>
                <Card.Text>
                  <span>
                    <b>{`${t('work.work')}:`}</b>
                  </span>
                  <br />
                  <span>
                    {t('work.kindergarten')}
                  </span>
                </Card.Text>
                <Card.Text>
                  <span>
                    <b>{`${t('qualification.qualification')}:`}</b>
                  </span>
                  <br />
                  <span>
                    {t('qualification.grade')}
                  </span>
                </Card.Text>
                <Card.Text>
                  <span>
                    <b>{`${t('experience.experience')}:`}</b>
                  </span>
                  <br />
                  <span>{t('experience.years')}</span>
                </Card.Text>
                <Button variant="outline-success" className="w-10 mb-3" onClick={() => setShow(true)}>{t('feedback.feedback')}</Button>
              </Col>
              <Col className="d-flex align-items-center justify-content-center">
                <Image src="Darya.jpg" className="w-75 ml-5 mt-5 mb-3 d-none d-md-block" alt={t('basic.name_surname')} />
              </Col>
            </Card.Body>
            <Card.Img src="Darya.jpg" className="w-100 ml-5 mt-5 mb-3 d-md-none" alt={t('basic.name_surname')} />
          </Card>
        </Col>
      </Row>
      <ModalFeedback show={show} onHide={() => setShow(false)} />
    </>
  );
};

export default Me;
