import React, { useEffect, useState } from 'react';
import s from './Serrvices.module.scss';
import Buttons from './Buttons/Buttons.jsx';
import Text from './Text/Text.jsx';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const {t, i18n } = useTranslation()
  const [index, setIndex] = useState(1);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active) {
      const timer = setTimeout(() => {
        setIndex(0);
        return index < 6 ? setIndex(index + 1) : setIndex(1);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [index, active]);

  return (
      <div className={s.services}>
            <div className={s.container}>
                <div className={s.title}>
                    {t("services.title")}
                </div>
                <div className={s.wrapper}>
                    <Buttons selectButton={index} setActive={setActive} setIndex={setIndex}/>
                    <Text selectText={index}/>
                </div>
            </div>
        </div>
  );
};

export default Services;
