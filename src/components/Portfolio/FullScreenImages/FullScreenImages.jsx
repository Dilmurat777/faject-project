import React from 'react';
import Header from '../../Header/Header';
import { AiOutlineClose } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import styles from './FullScreenImages.module.scss';

const FullScreenImages = ({
  fullscreen,
  handleCloseFullImage,
  getCurrentImages,
  setCurrentImageIndex,
  setFullscreen,
  currentImageIndex,
  fullscreenHandleNext,
  fullscreenHandlePrevious,
  getCurrentImage
}) => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      {fullscreen && (
        <div className={styles.fullscreenImgOverlay}>
          <Header />
          <button className={styles.closeButton} onClick={handleCloseFullImage}>
            <AiOutlineClose />
          </button>
          <div className={styles.fullscreenWrapper}>
            <img className={styles.fullscreenImage} src={fullscreen} alt="full screen images" />

            <div className={styles.fullscreenImageNavDots}>
              {getCurrentImages().map((item, index) => (
                <div
                  key={index}
                  className={`${styles.navDot} ${
                    index === currentImageIndex ? styles.activeDot : ''
                  }`}
                  onClick={() => {
                    setCurrentImageIndex(index); // Update the current image index
                    setFullscreen(getCurrentImage(index)); // Update the displayed fullscreen image
                  }}></div>
              ))}
            </div>

            <p className={styles.fullscreenText}>{t('portfolio.desc')}</p>

            <div className={styles.fullscreenButtons}>
              <button
                className={`${styles.portfolioBtn} ${styles.fullscreenBtn}`}
                onClick={fullscreenHandlePrevious}>
                {t('buttons.back')}
              </button>
              <button
                className={`${styles.portfolioBtn} ${styles.fullscreenBtn}`}
                onClick={fullscreenHandleNext}>
                {t('buttons.next')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FullScreenImages;


{/* <FullScreenImages fullscreen={fullscreen} handleCloseFullImage={handleCloseFullImage} getCurrentImages={getCurrentImages} setCurrentImageIndex={setCurrentImageIndex} setFullscreen={setFullscreen} currentImageIndex={currentImageIndex} fullscreenHandleNext={fullscreenHandleNext} fullscreenHandlePrevious={fullscreenHandlePrevious} getCurrentImage={getCurrentImage}/> */}