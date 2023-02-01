import React, { useState } from 'react';
import {
  Col,
  Row,
  Card,
  ListGroup,
  Accordion,
} from 'react-bootstrap';

const AddEducation = () => {
  const [showReadMore, setShowReadMore] = useState(false);
  const handleClick = () => setShowReadMore(!showReadMore);
  return (
    <Row className="justify-content-center align-content-center">
      <Col xs={12} md={12} xxl={6}>
        <Card className="h-100 mt-5 text-center border-0" style={{ background: '#E0FFFF' }}>
          <Card.Body className="row">
            <Card.Text className="h1 my-3">Дополнительное образование</Card.Text>
            <ListGroup horizontal>
              <ListGroup.Item className="border-0 ps-0" style={{ background: '#E0FFFF' }}>
                <img src="yes2.png" alt="fff" />
                <h5>
                  Курс &laquo;Современные методики вовлечения ученика в
                  образовательный процесс как основа профессионального мастерства учителя&raquo;
                  - 4 часа
                </h5>
                <p>2022г. Сертификат</p>
              </ListGroup.Item>
              <ListGroup.Item className="border-0" style={{ background: '#E0FFFF' }}>
                <img src="yes2.png" alt="fff" />
                <h5>
                  Учебная программа
                  &laquo;Технологии логопедической работы: логопедический массаж&raquo;
                  - 24 часа
                </h5>
                <p>2018г. Сертификат</p>
              </ListGroup.Item>
              <ListGroup.Item className="border-0 pe-0" style={{ background: '#E0FFFF' }}>
                <img src="yes2.png" alt="fff" />
                <h5>
                  Вебинар &laquo;Дистанционная работа с ребенком
                  с нарушением речевого развития, опыт, выводы,
                  советы экспертов, разбор ошибок и пути выхода&raquo;
                  - 4 часа
                </h5>
                <p>2020г. Сертификат</p>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup horizontal>
              <ListGroup.Item className="border-0 ps-0" style={{ background: '#E0FFFF' }}>
                <img src="yes2.png" alt="fff" />
                <h5>
                  Вебинар &laquo;Нейродиагностика и нейростимуляция
                  сенсомоторного и интеллектуального базиса речи&raquo;
                  - 4 часа
                </h5>
                <p>2020г. Сертификат</p>
              </ListGroup.Item>
              <ListGroup.Item className="border-0" style={{ background: '#E0FFFF' }}>
                <img src="yes2.png" alt="fff" />
                <h5>
                  Курс &laquo;Есть контакт!
                  Работа педагога с современными родителями
                  как обязательное требование профстандарта&raquo;
                  - 16 часов
                </h5>
                <p>2020г. Сертификат</p>
              </ListGroup.Item>
              <ListGroup.Item className="border-0 pe-0" style={{ background: '#E0FFFF' }}>
                <img src="yes2.png" alt="fff" />
                <h5>
                  Авторский экспресс-курс Вячеслава Летуновского
                  &laquo;Коммуникативная компетентность. Психологические аспекты&raquo;
                  - 18 часов
                </h5>
                <p>2020г. Свидетельство</p>
              </ListGroup.Item>
            </ListGroup>
            <Accordion flush className="mb-3">
              <Accordion.Item eventKey="0" style={{ background: '#E0FFFF' }}>
                <Accordion.Body className="p-0">
                  <ListGroup horizontal>
                    <ListGroup.Item className="border-0 ps-0" style={{ background: '#E0FFFF' }}>
                      <img src="yes2.png" alt="fff" />
                      <h5>
                        Вебинар &laquo;Нейродиагностика и нейростимуляция сенсомоторного
                        и интеллектуального базиса речи&raquo;
                        - 4 часа
                      </h5>
                      <p>2020г. Сертификат</p>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0" style={{ background: '#E0FFFF' }}>
                      <img src="yes2.png" alt="fff" />
                      <h5>
                        Курс &laquo;Есть контакт!
                        Работа педагога с современными родителями как
                        обязательное требование профстандарта&raquo;
                        - 16 часов
                      </h5>
                      <p>2020г. Сертификат</p>
                    </ListGroup.Item>
                    <ListGroup.Item className="border-0 pe-0" style={{ background: '#E0FFFF' }}>
                      <img src="yes2.png" alt="fff" />
                      <h5>
                        Авторский экспресс-курс Вячеслава Летуновского
                        &laquo;Коммуникативная компетентность. Психологические аспекты&raquo;
                        - 18 часов
                      </h5>
                      <p>2020г. Свидетельство</p>
                    </ListGroup.Item>
                  </ListGroup>
                </Accordion.Body>
                <Accordion.Header onClick={handleClick}>
                  <h5>{showReadMore ? 'Скрыть' : 'Подробнее'}</h5>
                </Accordion.Header>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default AddEducation;
