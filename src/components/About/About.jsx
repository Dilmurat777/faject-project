import React from 'react';
import { useTranslation } from 'react-i18next';
import ExperienceSVG from '../../assets/about-icons/Experience';
import CollaborationSVG from '../../assets/about-icons/Collaboration';
import BrainSVG from '../../assets/about-icons/Brain';
import ThoughtfulStructureSVG from '../../assets/about-icons/ThoughtfulStructure';
import { motion } from 'framer-motion';
import styles from './About.module.scss';

const textRight = {
  hidden: {
    x: -180,
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
          <motion.div
            custom={2}
            variants={textRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}>
            <h1 className={styles.subtitle}>{t('about.subtitle1')}</h1>
            <p className={styles.aboutText}>{t('about.text1')}</p>
          </motion.div>

          <div className={styles.imageSvg}>
            <ExperienceSVG />
          </div>
        </div>

        <div className={styles.aboutItems}>
          <div className={styles.imageSvg}>
            <CollaborationSVG />
          </div>

          <motion.div
            custom={2}
            variants={textLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}>
            <h1 className={styles.subtitle}>{t('about.subtitle2')}</h1>
            <p className={styles.aboutText}>{t('about.text2')}</p>
          </motion.div>
        </div>

        <div className={styles.aboutItems}>
          <motion.div
            custom={2}
            variants={textRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}>
            <h1 className={styles.subtitle}>{t('about.subtitle3')}</h1>
            <p className={styles.aboutText}>{t('about.text3')}</p>
          </motion.div>

          <div className={styles.imageSvg}>
            <BrainSVG />
          </div>
        </div>

        <div className={styles.aboutItems}>
          <div className={styles.imageSvg}>
            <ThoughtfulStructureSVG />
          </div>

          <motion.div
            custom={2}
            variants={textLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}>
            <h1 className={styles.subtitle}>{t('about.subtitle4')}</h1>
            <p className={styles.aboutText}>{t('about.text4')}</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
