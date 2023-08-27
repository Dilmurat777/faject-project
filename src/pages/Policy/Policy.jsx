import React from 'react';
import styles from './Policy.module.scss';
import Footer from '../../components/Footer/Footer';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import HeaderPolicy from '../Policy/HeaderPolicy';
import ArrowSVG from '../../assets/ArrowSVG';

const Policy = () => {
  const { t, i18n } = useTranslation();

  const [activeText, setActiveText] = useState(1);

  const handleClick = (index) => {
    setActiveText(index);
  };

  return (
    <div>
      <HeaderPolicy />
      <section className={styles.policy}>
        <div className={styles.container}>
          <h1 className={styles.policyTitle}>{t('policy.title')}</h1>
          <div className={styles.policyContent}>
            <div className={styles.policyButtons}>
              <button
                onClick={() => handleClick(1)}
                className={`${styles.policyBtn} ${activeText === 1 ? styles.activeBtn : ''}`}>
                {t('policy.text-btn1')}
              </button>
              <button
                onClick={() => handleClick(2)}
                className={`${styles.policyBtn} ${activeText === 2 ? styles.activeBtn : ''}`}>
                {t('policy.text-btn2')}
              </button>
            </div>

            <div className={styles.textContent}>
              <p className={styles.policyText}>{t(`policy.text${activeText}`)}</p>
            </div>
          </div>
          <Link to={'/'}>
            <button className={`${styles.policyBtn} ${styles.arrowBtn}`}>
              <ArrowSVG /> {t('policy.text-back')}
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Policy;
