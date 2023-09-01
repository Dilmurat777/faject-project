import React from 'react';
import styles from './Buttons.module.scss';
import { useTranslation } from 'react-i18next';
import HorizontalScroll from '../../../UI/HorizontalScroll/HorizontalScroll';
import useServiceOptions from '../../../hooks/useServiceOptions';

const Buttons = ({ items, handleNavClick, active }) => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <HorizontalScroll>
        <div className={styles.buttonItems}>
          {items.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id, index)}
              className={`${active === index ? styles.activeButtonItem : ''} ${styles.buttonItem}`}>
              {t('portfolio.portfolio' + (item.id))}
            </button>
          ))}
        </div>
      </HorizontalScroll>
    </div>
  );
};

export default Buttons;
