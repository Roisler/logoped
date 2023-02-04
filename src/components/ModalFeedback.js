/* eslint-disable react/prop-types */
import React from 'react';
import {
  Form,
  Button,
  Spinner,
  Modal,
} from 'react-bootstrap';
import { useForm, ValidationError } from '@formspree/react';

const keyForFormSpree = process.env.REACT_APP_ACCESS_FORMSPREE_TOKEN;

const ContactForm = () => {
  const [state, handleSubmit] = useForm(keyForFormSpree);
  if (state.succeeded) {
    return <p>Сообщение успешно отправлено! Я отвечу на него в ближайшее время</p>;
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-4">
        <Form.Label htmlFor="name">
          Ваше имя
        </Form.Label>
        <Form.Control
          id="name"
          type="text"
          name="name"
          placeholder="Введите имя"
          required
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
        />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label htmlFor="email">
          Ваш Email
        </Form.Label>
        <Form.Control
          id="email"
          type="email"
          name="email"
          placeholder="Введите Email"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label htmlFor="message">
          Сообщение
        </Form.Label>
        <Form.Control
          as="textarea"
          row={5}
          id="message"
          name="message"
          placeholder="Введите сообщение"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </Form.Group>
      <Button variant="outline-success" type="submit" disabled={state.submitting}>
        {state.submitting && (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        )}
        Отправить
      </Button>
    </Form>
  );
};

const ModalFeedback = ({ show, onHide }) => (
  <Modal
    size="lg"
    show={show}
    onHide={onHide}
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      Напишите мне!
    </Modal.Header>
    <Modal.Body>
      <ContactForm />
    </Modal.Body>
  </Modal>
);

export default ModalFeedback;
