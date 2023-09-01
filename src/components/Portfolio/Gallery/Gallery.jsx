import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Buttons from '../Buttons/Buttons';
import { AiOutlineClose } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import styles from './Gallery.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import portfolioAPI from '../../../serviceApi/portfolio.api';
import useServiceOptions from '../../../hooks/useServiceOptions';

// import { portfolioNavData, portfolioData } from '../data';
// import Header from '../../Header/Header';

function splitArrayInHalf(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  const firstHalf = arr.slice(0, middleIndex);
  const secondHalf = arr.slice(middleIndex);
  return [firstHalf, secondHalf];
}

const Gallery = () => {
  const { t, i18n } = useTranslation();
  const [portfolios, setPortfolios] = useState([]);

  const [galleryService, setGalleryService] = useState(2);
  const [filterProject, setFilterProject] = useState([]);
  const [active, setActive] = useState(0);
  const [fullscreen, setFullscreen] = useState(null);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const [isButton1Active, setIsButton1Active] = useState(true);
  const [isButton2Active, setIsButton2Active] = useState(false);

  const [options] = useServiceOptions([]);

  const [firstHalf, secondHalf] = splitArrayInHalf(filterProject);

  const handleNext = () => {
    setDirection(+1);
    const nextIndex = (active + 1) % options.length;
    setActive(nextIndex);
    setGalleryService(options[nextIndex].id);
    setIsButton1Active(true);
    setIsButton2Active(false);
  };

  const handlePrevious = () => {
    setDirection(-1);
    const prevIndex = (active - 1 + options.length) % options.length;
    setActive(prevIndex);
    setGalleryService(options[prevIndex].id);
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
    return images[index]?.portfolio_header_image;
  };

  const getCurrentImages = () => {
    const result = portfolios.filter((project) => {
      return +project.portfolio_service_category.id === galleryService;
    });

    return result;
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

  useEffect(() => {
    let interval = 0;
    if (options.length > 0) {
      interval = setInterval(handleNext, 8000);
    }
    return () => clearInterval(interval);
  }, [active, options]);

  const handleNavClick = (id, index) => {
    setDirection(active > index ? -1 : 1); // change > to < if you want to change direction of slider
    setGalleryService(id);
    setActive(index);
  };

  useEffect(() => {
    const result = portfolios.filter((project) => {
      return +project.portfolio_service_category.id === galleryService;
    });

    setFilterProject(result);
  }, [portfolios, galleryService]);

  useEffect(() => {
    async function fetchData() {
      const response = await portfolioAPI.getAll();

      setPortfolios(response);
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (options.length > 0) {
      setGalleryService(options[0]?.id);
    } else {
      setGalleryService(1);
    }
  }, [options.length]);

  return (
    <div>
      {fullscreen && (
        <div className={styles.fullscreenImgOverlay}>
          <div className={styles.fullscreenWrapper}>
            <button className={styles.closeButton} onClick={handleCloseFullImage}>
              <AiOutlineClose />
            </button>
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
                className={`${isButton2Active === true ? styles.activeBtn : styles.notActive} ${
                  styles.portfolioBtn
                } ${styles.fullscreenBtn}`}
                onClick={fullscreenHandlePrevious}>
                {t('buttons.back')}
              </button>
              <button
                className={`${isButton1Active === true ? styles.activeBtn : styles.notActive} ${
                  styles.portfolioBtn
                } ${styles.fullscreenBtn}`}
                onClick={fullscreenHandleNext}>
                {t('buttons.next')}
              </button>
            </div>
          </div>
        </div>
      )}

      <Buttons items={options} handleNavClick={handleNavClick} active={active} />

      <div>
        <div className={styles.portfolioGridCategory1}>
          {galleryService &&
            getLimitedImages(firstHalf, 2).map((item, index) => (
              <AnimatePresence key={item.slug} custom={direction}>
                <motion.div
                  drag="x"
                  dragConstraints={{ right: 0 }}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  // exit="exit"
                  custom={direction}
                  transition={{
                    type: 'tween',
                    duration: 1,
                  }}>
                  <Card
                    image={item.portfolio_header_image}
                    title={t(`portfolio.portfolio${item.portfolio_service_category.id}`)}
                    index={index}
                    handelImage={() => handleFullImage(item.portfolio_header_image)}
                    alt={item.portfolio_heager_image_alt}
                  />
                </motion.div>
              </AnimatePresence>
            ))}
        </div>
        <div className={styles.portfolioGridCategory2}>
          {galleryService &&
            getLimitedImages(secondHalf, 2).map((item, index) => (
              <AnimatePresence key={item.slug} custom={direction}>
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
                    key={item.slug}
                    image={item.portfolio_header_image}
                    title={t(`portfolio.portfolio${item.portfolio_service_category.id}`)}
                    index={index}
                    handelImage={() => handleFullImage(item.portfolio_header_image)}
                    alt={item.portfolio_heager_image_alt}
                  />
                </motion.div>
              </AnimatePresence>
            ))}
        </div>

        <div className={styles.portfolioButtons}>
          <button
            className={`${isButton2Active === true ? styles.activeBtn : styles.notActive} ${
              styles.portfolioBtn
            }`}
            onClick={handlePrevious}>
            {t('buttons.back')}
          </button>
          <button
            className={`${isButton1Active === true ? styles.activeBtn : styles.notActive} ${
              styles.portfolioBtn
            }`}
            onClick={handleNext}>
            {t('buttons.next')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

{
  /* <motion.div className={styles.carousel}>
            <motion.div className={styles.innerCarousel}>
              {
                portfolioData.map((image) => (
                  <img src={image} alt="image" />
                ))
              }
            </motion.div>
          </motion.div> */
}
