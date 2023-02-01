import React from 'react';
import {
  Card,
  Row,
  Tab,
  Nav,
  Col,
} from 'react-bootstrap';

const About = () => (
  <Row className="justify-content-center align-content-center h-100">
    <Col xs={12} md={12} xxl={6}>
      <Card id="about" className="h-100 mt-5 text-center border-0">
        <Card.Body className="row">
          <Card.Text className="h1">Обо мне</Card.Text>
          <Card.Text className="mt-3">Я работаю учителем-логопедом в детском саду №27 Тополёк</Card.Text>
          <Card.Text>
            Окончила Томский Государственный Педагогический Университет
            с красным дипломом
          </Card.Text>
          <Card.Text>Общий педагогический стаж 4 года</Card.Text>
          <Tab.Container id="tabs-about-me" defaultActiveKey="education">
            <Nav fill variant="tabs" role="tablist">
              <Nav.Item>
                <Nav.Link eventKey="education">
                  <img src="education.png" alt="Образование" />
                  <h5>Образование</h5>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="work">
                  <img src="education.png" alt="Работа" />
                  <h5>Работа</h5>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="qualify">
                  <img src="education.png" alt="Квалификация" />
                  <h5>Квалификация</h5>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane className="mt-5" role="tabpanel" eventKey="education">
                <p>2018 г. ФГБОУ ВО «Томский государственный педагогический университет»</p>
                <p>Факультет психолого-педагогического и специального образования</p>
                <p>Направление подготовки: специальное (дефектологическое) образование.</p>
                <p>Профиль «Логопедия» (красный диплом)</p>
              </Tab.Pane>
              <Tab.Pane className="mt-5" role="tabpanel" eventKey="work">
                <h5>Место работы</h5>
                <p>
                  Муниципальное бюджетное дошкольное образовательное учреждение
                  Детский сад №27 Тополек
                </p>
                <h5>Занимаемая должность: учитель-логопед</h5>
                <h5>Стаж педагогической работы: 4 года</h5>
                <h5>Стаж работы в занимаемой должности: 4 года</h5>
              </Tab.Pane>
              <Tab.Pane className="mt-5" role="tabpanel" eventKey="qualify">
                <h5>Квалификационная категория: первая</h5>
                <h5>ОБРСОЮЗ по программе:</h5>
                <p>
                  Личная эффективность работника образования»,
                  в объеме 72 часа, декабрь 2021 г.
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default About;
