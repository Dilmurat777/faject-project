import React, { useEffect, useState } from 'react';
import s from './Services.module.scss';
import Buttons from './Buttons/Buttons.jsx';
import Text from './Text/Text.jsx';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const textRight = {
  hidden: {
    x: -150,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: custom * 0.2 },
  }),
};

const textLeft = {
  hidden: {
    x: 180,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: custom * 0.2 },
  }),
};

const Services = () => {
  const { t, i18n } = useTranslation();
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
    <section className={s.services}>
      <div className={s.container}>
        <div className={s.title}>{t('services.title')}</div>
        <div className={s.wrapper}>
          <motion.div
            custom={2}
            variants={textRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}>
            <Buttons selectButton={index} setActive={setActive} setIndex={setIndex} />
          </motion.div>
          <motion.div
            custom={2}
            variants={textLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}>
            <Text selectText={index} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
