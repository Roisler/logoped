import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="page-footer pt-3 pb-2 text-center" style={{ color: 'white', background: '#2F4F4F' }}>
      <p>{t('basic.personal_site')}</p>
    </footer>
  );
};

export default Footer;
