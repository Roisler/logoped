import React, { useState } from 'react';
import {
  Card,
  Col,
  Button,
  Row,
  Image,
} from 'react-bootstrap';
import ModalFeedback from './ModalFeedback';

const Me = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Row className="m-0">
        <Col className="p-0">
          <Card id="me" className="h-100 border-0 w-100 text-right">
            <Card.Body className="row row-cols-1 row-cols-md-2">
              <Col className="d-flex flex-column text-justify">
                <Card.Text className="h5 mt-3">Сайт учителя-логопеда</Card.Text>
                <Card.Text className="h1">Бондарчук Дарья Анатольевна</Card.Text>
                <Card.Text className="mt-3">
                  <span>
                    <b>Образование:</b>
                  </span>
                  <br />
                  <span>
                    Окончила ФГБОУ ВО «Томский государственный педагогический университет»
                    по профилю «Логопедия»
                    в 2018 году с красным дипломом
                  </span>
                </Card.Text>
                <Card.Text>
                  <span>
                    <b>Место работы:</b>
                  </span>
                  <br />
                  <span>
                    МБДОУ Детский сад №21 «Ивушка»
                  </span>
                </Card.Text>
                <Card.Text>
                  <span>
                    <b>Квалификация:</b>
                  </span>
                  <br />
                  <span>
                    Первая квалификационная категория
                    (ОБРСОЮЗ по программе:
                    Личная эффективность работника образования», в объеме 72 часа, декабрь 2021)
                  </span>
                </Card.Text>
                <Card.Text>
                  <span>
                    <b>Стаж педагогической работы:</b>
                  </span>
                  <br />
                  <span>4 года</span>
                </Card.Text>
                <Button variant="outline-success" className="w-10 mb-3" onClick={() => setShow(true)}>Обратная связь</Button>
              </Col>
              <Col className="d-flex align-items-center justify-content-center">
                <Image src="Darya.jpg" className="w-75 ml-5 mt-5 mb-3 d-none d-md-block" alt="Фотография учителя-логопеда" />
              </Col>
            </Card.Body>
            <Card.Img src="Darya.jpg" className="w-100 ml-5 mt-5 mb-3 d-md-none" alt="Фотография учителя-логопеда" />
          </Card>
        </Col>
      </Row>
      <ModalFeedback show={show} onHide={() => setShow(false)} />
    </>
  );
};

export default Me;
