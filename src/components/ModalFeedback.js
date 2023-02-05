/* eslint-disable react/prop-types */
import React from 'react';
import {
  Form,
  Button,
  Spinner,
  Modal,
} from 'react-bootstrap';
import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from 'react-i18next';

const keyForFormSpree = process.env.REACT_APP_ACCESS_FORMSPREE_TOKEN;

const ContactForm = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm(keyForFormSpree);
  const fields = ['name', 'email', 'message'];

  if (state.succeeded) {
    return <p>{t('feedback.send_successed')}</p>;
  }
  return (
    <Form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <Form.Group key={field} className="mb-4">
          <Form.Label htmlFor={field}>
            {t(`feedback.${field}`)}
          </Form.Label>
          <Form.Control
            as={field === 'message' ? 'textarea' : 'input'}
            id={field}
            type={field === 'email' ? 'email' : 'text'}
            name={field}
            placeholder={t(`feedback.${field}_placeholder`)}
            required
          />
          <ValidationError
            prefix={field}
            field={field}
            errors={state.errors}
          />
        </Form.Group>
      ))}
      <Button variant="outline-success" type="submit" disabled={state.submitting}>
        {state.submitting && (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            className="mx-1"
          />
        )}
        {t('basic.send')}
      </Button>
    </Form>
  );
};

const ModalFeedback = ({ show, onHide }) => {
  const { t } = useTranslation();
  return (
    <Modal
      size="lg"
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {t('basic.write')}
      </Modal.Header>
      <Modal.Body>
        <ContactForm />
      </Modal.Body>
    </Modal>
  );
};

export default ModalFeedback;
