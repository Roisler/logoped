import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import state from '../state/index';

const EducationList = () => {
  const { education } = state;
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <Button
        variant="light"
        onClick={() => setOpen(!open)}
        aria-controls="add-educations"
        aria-expanded={open}
        className="align-items-center w-50 mb-3 shadow"
      >
        {open ? t('education.hide_more') : t('education.view_more')}
      </Button>
      <Collapse in={open}>
        <div id="add-educations text-left">
          <ol className="shadow-lg py-3">
            {education.map(({ id, description }) => (
              <li key={id} className="my-2">{description}</li>
            ))}
          </ol>
        </div>
      </Collapse>
    </>
  );
};

export default EducationList;
