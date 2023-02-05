import React from 'react';
import i18n from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import resources from './locales/index';
import App from './App';

const init = async () => {
  const i18nInstance = i18n.createInstance();
  await i18nInstance
    .use(initReactI18next)
    .init({
      resources,
      lng: 'ru',
      fallbackLng: 'ru',
    });
  const vdom = (
    <React.StrictMode>
      <I18nextProvider i18n={i18nInstance}>
        <App />
      </I18nextProvider>
    </React.StrictMode>
  );
  return vdom;
};

export default init;
