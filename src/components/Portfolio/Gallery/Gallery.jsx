import React, { useEffect, useState } from 'react';
import { portfolioNavData, portfolioData } from '../data';
import Card from '../Card/Card';
import Buttons from '../Buttons/Buttons';
import { AiOutlineClose } from 'react-icons/ai';
import Header from '../../Header/Header';
import { useTranslation } from 'react-i18next';
import styles from './Gallery.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

const categoryDefault = 'Разработка веб-сайта';

function splitArrayInHalf(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, middleIndex);
  const secondHalf = arr.slice(middleIndex);
  return [firstHalf, secondHalf];
}

const Gallery = () => {
  const { t, i18n } = useTranslation();

  const [galleryItems, setGalleryItems] = useState(categoryDefault);
  const [filterProject, setFilterProject] = useState([]);
  const [active, setActive] = useState(0);
  const [fullscreen, setFullscreen] = useState(null);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const [isButton1Active, setIsButton1Active] = useState(true);
  const [isButton2Active, setIsButton2Active] = useState(false);


  useEffect(() => {
    const newProject = portfolioData.filter((project) => {
      return project.categoryEN === galleryItems || project.categoryRU === galleryItems;
    });
    setFilterProject(newProject);
  }, [galleryItems]);

  useEffect(() => {
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [active]);
  const handelNavClick = (item, index) => {
    setGalleryItems(item);
    setActive(index);
  };

  const [firstHalf, secondHalf] = splitArrayInHalf(filterProject);

  const handleNext = () => {
    setDirection(+1);
    const nextIndex = (active + 1) % portfolioNavData.length;
    setActive(nextIndex);
    setGalleryItems(portfolioNavData[nextIndex].name);
    setIsButton1Active(true);
    setIsButton2Active(false);
  };

  const handlePrevious = () => {
    setDirection(-1);
    const prevIndex = (active - 1 + portfolioNavData.length) % portfolioNavData.length;
    setActive(prevIndex);
    setGalleryItems(portfolioNavData[prevIndex].name);
    setIsButton1Active(false);
    setIsButton2Active(true);
  };

  const getLimitedImages = (images, limit) => {
    return images.slice(0, limit);
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
    return portfolioData.filter((project) => {
      return project.categoryEN === galleryItems || project.categoryRU === galleryItems;
    });
  };

  const getTotalImages = () => {
    // Получение общего числа изображений
    const images = getCurrentImages();
    return images.length;
  };

  const fullscreenHandleNext = (event) => {
    event.stopPropagation();
    const totalImages = getTotalImages();
    const nextIndex = (currentImageIndex + 1) % totalImages;
    setCurrentImageIndex(nextIndex);
    setFullscreen(getCurrentImage(nextIndex));
    setIsButton1Active(true);
    setIsButton2Active(false);
  };

  const fullscreenHandlePrevious = (event) => {
    event.stopPropagation();
    const totalImages = getTotalImages();
    const previousIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    setCurrentImageIndex(previousIndex);
    setFullscreen(getCurrentImage(previousIndex));
    setIsButton1Active(false);
    setIsButton2Active(true);
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
                  duration: 0.5,
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
                className={`${isButton2Active === true ? styles.activeBtn : styles.notActive} ${styles.portfolioBtn} ${styles.fullscreenBtn}`}
                onClick={fullscreenHandlePrevious}>
                {t('buttons.back')}
              </button>
              <button
                className={`${isButton1Active === true ? styles.activeBtn : styles.notActive} ${styles.portfolioBtn} ${styles.fullscreenBtn}`}
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
          getLimitedImages(firstHalf, 2).map((item, index) => (
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
          getLimitedImages(secondHalf, 2).map((item, index) => (
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
          <button className={`${isButton2Active === true ? styles.activeBtn : styles.notActive} ${styles.portfolioBtn}`} onClick={handlePrevious}>
            {t('buttons.back')}
          </button>
          <button className={`${isButton1Active === true ? styles.activeBtn : styles.notActive} ${styles.portfolioBtn}`} onClick={handleNext}>
            {t('buttons.next')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;