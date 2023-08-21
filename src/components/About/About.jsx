import React from 'react';
import { useTranslation } from 'react-i18next';
import HandShakeSVG from '../../assets/HandShakeSVG';
import QuestionsSVG from '../../assets/QuestionsSVG';
import BrainSVG from '../../assets/BrainSVG';
import PeoplesActivitySVG from '../../assets/PeoplesActivitySVG';
import { motion } from 'framer-motion';
import styles from './About.module.scss';



const textRight = {
  hidden: {
    x: -200,
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
    x: 200,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: custom * 0.2 },
  }),
};

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <motion.section

      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className={styles.about1}
      id={'about'}>

      <div className={styles.container}>
        <h2 className={styles.title1}>{t('about.title')}</h2>

        <div className={styles.aboutItems}>
          <div>
            <motion.p
              custom={2}
              variants={textRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              className={styles.aboutText}>
              {t('about.text1')}
            </motion.p>
          </div>

          <div className={styles.imageSvg}>
            <HandShakeSVG />
          </div>
        </div>

        <div className={styles.aboutItems}>
          <div className={styles.imageSvg}>
            <QuestionsSVG />
          </div>

          <div>
            <motion.p 
            custom={2}
            variants={textLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className={styles.aboutText}>{t('about.text2')}</motion.p>
          </div>
        </div>

        <div className={styles.aboutItems}>
          <div>
            <motion.p 
            custom={2}
            variants={textRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className={styles.aboutText}>{t('about.text3')}</motion.p>
          </div>

          <div className={styles.imageSvg}>
            <BrainSVG />
          </div>
        </div>

        <div className={styles.aboutItems}>
          <div className={styles.imageSvg}>
            <PeoplesActivitySVG />
          </div>

          <div>
            <motion.p 
            custom={2}
            variants={textLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className={styles.aboutText}>{t('about.text4')}</motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

