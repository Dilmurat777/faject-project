import React, { useEffect, useState } from 'react';
import { portfolioNavData, portfolioGalleryUpData, portfolioGalleryDownData } from '../data';
import Card from '../Card/Card';
import Buttons from '../Buttons/Buttons';
import { AiOutlineClose } from 'react-icons/ai';
import Header from '../../Header/Header';
import { useTranslation } from 'react-i18next';
import styles from './Gallery.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

const categoryDefault = 'Разработка веб-сайта - 73';

const Gallery = () => {
  const { t, i18n } = useTranslation();

  const [galleryItems, setGalleryItems] = useState(categoryDefault);
  const [filterProject, setFilterProject] = useState([]);
  const [active, setActive] = useState(0);
  const [fullscreen, setFullscreen] = useState(null);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const newProject = portfolioGalleryUpData.filter((project) => {
      return project.category === galleryItems;
    });
    setFilterProject(newProject);
  }, [galleryItems]);

  useEffect(() => {
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [active]);

  const handelNavClick = (e, index) => {
    setGalleryItems(e.target.textContent);
    setActive(index);
  };

  const handleNext = () => {
    setDirection(+1);
    const nextIndex = (active + 1) % portfolioNavData.length;
    setActive(nextIndex);
    setGalleryItems(portfolioNavData[nextIndex].name);
  };

  const handlePrevious = () => {
    setDirection(-1);
    const prevIndex = (active - 1 + portfolioNavData.length) % portfolioNavData.length;
    setActive(prevIndex);
    setGalleryItems(portfolioNavData[prevIndex].name);
  };

  // ******************** Overlay for full screen

  const handleFullImage = (image) => {
    setFullscreen(image);
  };

  const handleCloseFullImage = () => {
    setFullscreen(false);
  };

  const getCurrentImage = (index) => {
    // Получение URL текущего изображения по индексу
    const images = getCurrentImages();
    return images[index]?.image;
  };

  const getCurrentImages = () => {
    // Получение массива текущих изображений в галерее
    return portfolioGalleryUpData
      .concat(portfolioGalleryDownData)
      .filter((project) => project.category === galleryItems);
  };

  const getTotalImages = () => {
    // Получение общего числа изображений
    const images = getCurrentImages();
    return images.length;
  };

  const fullscreenHandlePrevious = (event) => {
    event.stopPropagation();
    const totalImages = getTotalImages();
    const previousIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    setCurrentImageIndex(previousIndex);
    setFullscreen(getCurrentImage(previousIndex));
  };

  const fullscreenHandleNext = (event) => {
    event.stopPropagation();
    const totalImages = getTotalImages();
    const nextIndex = (currentImageIndex + 1) % totalImages;
    setCurrentImageIndex(nextIndex);
    setFullscreen(getCurrentImage(nextIndex));
  };

  const variants = {
    initial: (direction) => {
      return { x: direction > 0 ? 800 : -800, opacity: 0 };
    },

    animate: { x: 0, opacity: 1 },

    exit: (direction) => {
      return { x: direction > 0 ? -800 : 800, opacity: 0 };
    },
  };

  return (
    <div>
      {fullscreen && (
        <div className={styles.fullscreenImgOverlay}>
          <Header />
          <button className={styles.closeButton} onClick={handleCloseFullImage}>
            <AiOutlineClose />
          </button>
          <div className={styles.fullscreenWrapper}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
              variants={variants}
              initial="initial"
              animate="animate"
              transition={{
                type: 'tween',
                duration: .5,
              }}
              custom={direction}
                className={styles.fullscreenImage}
                src={fullscreen}
                key={fullscreen}
                alt="full screen images"
              />
            </AnimatePresence>
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

      <Buttons handelNavClick={handelNavClick} active={active} />
      <div>
        <div className={styles.portfolioGridCategory1}>
          {galleryItems &&
            portfolioGalleryUpData
              .filter((project) => project.category === galleryItems)
              .map((item, index) => (
                <AnimatePresence key={item.id} custom={direction}>
                  <motion.div
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    custom={direction}
                    transition={{
                      duration: 1,
                    }}>
                    <Card
                      key={item.id}
                      image={item.image}
                      title={item.title}
                      index={index}
                      handelImage={() => handleFullImage(item.image)}
                    />
                  </motion.div>
                </AnimatePresence>
              ))}
        </div>
        <div className={styles.portfolioGridCategory2}>
          {galleryItems &&
            portfolioGalleryDownData

              .filter((project) => project.category === galleryItems)
              .map((item, index) => (
                <AnimatePresence key={item.id} custom={direction}>
                  <motion.div
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    custom={direction}
                    transition={{
                      duration: 1,
                    }}>
                    <Card
                      key={item.id}
                      image={item.image}
                      title={item.title}
                      index={index}
                      handelImage={() => handleFullImage(item.image)}
                    />
                  </motion.div>
                </AnimatePresence>
              ))}
        </div>

        <div className={styles.portfolioButtons}>
          <button className={styles.portfolioBtn} onClick={handlePrevious}>
            {t('buttons.back')}
          </button>
          <button className={styles.portfolioBtn} onClick={handleNext}>
            {t('buttons.next')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
