import React from 'react';
import styles from './Buttons.module.scss';
import { portfolioNavData } from '../data';
import { useTranslation } from 'react-i18next';
import HorizontalScroll from '../../../UI/HorizontalScroll/HorizontalScroll';

const Buttons = ({ handelNavClick, active }) => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <HorizontalScroll>
        <div className={styles.buttonItems}>
          {portfolioNavData.map((item, index) => (
            <button
              key={index}
              onClick={() => handelNavClick(t('portfolio.portfolio' + (index + 1)), index)}
              className={`${active === index ? styles.activeButtonItem : ''} ${styles.buttonItem}`}>
              {t('portfolio.portfolio' + (index + 1))}
            </button>
          ))}
        </div>
      </HorizontalScroll>
    </div>
  );
};

export default Buttons;