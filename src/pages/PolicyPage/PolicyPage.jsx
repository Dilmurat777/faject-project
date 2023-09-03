import React from 'react';
import styles from './Policy.module.scss';
// import Footer from '../../components/Footer/Footer';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import ArrowSVG from '../../assets/ArrowSVG';
import HorizontalScroll from '../../UI/HorizontalScroll/HorizontalScroll';
import { HeadHelmet } from '../../components/HeadHelmet/HeadHelmet';
import { useNavigate } from 'react-router-dom';

const PolicyPage = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [activeText, setActiveText] = useState(1);

  const handleClick = (index) => {
    setActiveText(index);
  };

  return (
    <>
      <HeadHelmet
        title="Policy page"
        description={'Beginner friendly page for learning React Helmet.'}
      />{' '}
      {/* write here your meta for Policy page*/}
      <section className={styles.policy}>
        <div className={styles.container}>
          <h1 className={styles.policyTitle}>{t('policy.title')}</h1>
          <div className={styles.policyContent}>
            <div>
              <HorizontalScroll>
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
              </HorizontalScroll>
            </div>
            <div className={styles.textContent}>
              <p className={styles.policyText}>{t(`policy.text${activeText}`)}</p>
            </div>
          </div>

          <button onClick={() => navigate(-1)} className={`${styles.policyBtn} ${styles.arrowBtn}`}>
            <ArrowSVG /> {t('policy.text-back')}
          </button>
        </div>
      </section>
    </>
  );
};

export default PolicyPage;
