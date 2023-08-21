import React from 'react';
import s from './Text.module.scss';
import { useTranslation } from 'react-i18next';




const Text = ({ selectText }) => {
  const { t, i18n } = useTranslation()
  const texts = [
    { id: 1, text: `${t('services.service1')}` },
    { id: 2, text:  `${t('services.service2')}` },
    { id: 3, text: 'SMM'},
    { id: 4, text: 'SEO'},
    { id: 5, text:  `${t('services.service3')}` },
    { id: 6, text:  `${t('services.service4')}`},
  ];
  return (
    <>
      {texts.map((item) => (
        <div key={item.id} className={selectText === item.id ? s.active : s.disable}>
          {item.text}
          <div className={s.servicesText}>
            <p className={s.text}>
              {t("services.text1")}
            </p>
            <p className={s.text}>
              {t("services.text2")}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Text;
