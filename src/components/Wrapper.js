import React from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col, Card } from 'react-bootstrap';

const Wrapper = ({ children, id }) => {
  const { t } = useTranslation();
  return (
    <Row className="m-0">
      <Col xs={12} md={12} xxl={6} className="p-0">
        <Card id={id} className="mt-2 pb-3 text-center border-0 rounded-0">
          <Card.Body className="row">
            <Card.Text className="h1 my-5">{t(`${id}.${id}`)}</Card.Text>
            <Row xs={2} sm={3} md={3}>
              {children}
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Wrapper;
