import React, { useEffect, useState } from 'react';
import { portfolioNavData, profileGalleryUpData, profileGalleryDownData } from './Data'; // Импорт данных для галереи
import PortfolioCard from './PortfolioCard'; // Импорт компонента PortfolioCard
import { AiOutlineClose } from 'react-icons/ai'; // Импорт иконки из библиотеки react-icons
import { AnimatePresence, motion } from 'framer-motion'; // Импорт анимаций из библиотеки framer-motion
import styles from './Portfolio.module.scss'; // Импорт стилей

const categoryDefault = 'Разработка веб-сайта - 73'; // Исходная категория галереи

const PortfolioGallery = () => {
  const [galleryItems, setGalleryItems] = useState(categoryDefault); // Состояние выбранной категории галереи
  const [filteredProjects, setFilteredProjects] = useState([]); // Состояние отфильтрованных проектов
  const [active, setActive] = useState(0); // Состояние активного элемента (пункта меню)
  const [fullscreenImage, setFullscreenImage] = useState(null); // Состояние показа полноразмерного изображения

  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Состояние текущего индекса изображения

  useEffect(() => {
    // Фильтрация проектов при изменении выбранной категории
    const newProject = profileGalleryUpData.filter((project) => {
      return project.category === galleryItems;
    });
    setFilteredProjects(newProject);
  }, [galleryItems]);

  useEffect(() => {
    // Автоматическая смена изображений каждые 4 секунды
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [active]);

  // Обработчики событий

  const handleClick = (e, index) => {
    // Обработка клика по элементу меню
    setGalleryItems(e.target.textContent); // Установка выбранной категории
    setActive(index); // Установка активного элемента (пункта меню)
  };

  const handleNext = () => {
    // Переход к следующей категории
    const nextIndex = (active + 1) % portfolioNavData.length;
    setGalleryItems(portfolioNavData[nextIndex].name); // Установка выбранной категории
    setActive(nextIndex); // Установка активного элемента (пункта меню)
  };

  const handlePrevious = () => {
    // Переход к предыдущей категории
    const nextIndex = (active - 1 + portfolioNavData.length) % portfolioNavData.length;
    setGalleryItems(portfolioNavData[nextIndex].name); // Установка выбранной категории
    setActive(nextIndex); // Установка активного элемента (пункта меню)
  };

  const handleImageClick = (image) => {
    // Обработка клика по изображению для показа в полноэкранном режиме
    setFullscreenImage(image); // Установка изображения для показа в полноэкранном режиме
  };

  const handleCloseFullscreen = () => {
    // Закрытие полноэкранного режима
    setFullscreenImage(null); // Очистка состояния изображения для полноэкранного режима
  };

  const handleNextImage = (e) => {
    // Переход к следующему изображению в полноэкранном режиме
    e.stopPropagation();
    const totalImages = getTotalImages(); // Получение общего числа изображений
    const nextIndex = (currentImageIndex + 1) % totalImages;
    setCurrentImageIndex(nextIndex); // Установка индекса следующего изображения
    setFullscreenImage(getCurrentImage(nextIndex)); // Установка изображения для полноэкранного режима
  };

  const handlePreviousImage = (e) => {
    // Переход к предыдущему изображению в полноэкранном режиме
    e.stopPropagation();
    const totalImages = getTotalImages(); // Получение общего числа изображений
    const previousIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    setCurrentImageIndex(previousIndex); // Установка индекса предыдущего изображения
    setFullscreenImage(getCurrentImage(previousIndex)); // Установка изображения для полноэкранного режима
  };

  // Вспомогательные функции

  const getCurrentImage = (index) => {
    // Получение URL текущего изображения по индексу
    const images = getCurrentImages();
    return images[index]?.image;
  };

  const getCurrentImageIndex = () => {
    // Получение индекса текущего изображения
    const images = getCurrentImages();
    return images.findIndex((item) => item.image === fullscreenImage);
  };

  const getTotalImages = () => {
    // Получение общего числа изображений
    const images = getCurrentImages();
    return images.length;
  };

  const getCurrentImages = () => {
    // Получение массива текущих изображений в галерее
    return profileGalleryUpData
      .concat(profileGalleryDownData)
      .filter((project) => project.category === galleryItems);
  };

  // Возвращаем JSX разметку

  return (
    <div>
      {fullscreenImage && (
        <div className={styles.fullscreenImageOverlay}>
          <button className={styles.closeButton} onClick={handleCloseFullscreen}>
            <AiOutlineClose />
          </button>

          <div className={styles.profileItems}>
            <AnimatePresence>
              <motion.img
                key={fullscreenImage}
                src={fullscreenImage}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                // exit={{ x: -300, opacity: 0 }}
                className={styles.fullscreenImage}
                alt="image full screen"
              />
              </AnimatePresence>
              {/* <img className={styles.fullscreenImage} src={fullscreenImage} alt="image full screen" /> */}
            <div>
              <div className={styles.fullscreenImageNavDots}>
                {getCurrentImages().map((item, index) => (
                  <div
                  key={index}
                  className={`${styles.navDot} ${
                    index === currentImageIndex ? styles.activeDot : ''
                  }`}
                  onClick={() => setCurrentImageIndex(index)}></div>
                  ))}
              </div>
            </div>

            <div>
              <p className={styles.portfolioText}>
                Создание брендинга для депо-стартапа - это процесс разработки уникального и
                запоминающегося логотипа, фирменного стиля и других элементов бренда, которые
                помогут выделить проект на рынке и привлечь внимание потенциальных клиентов.
              </p>
            </div>
            <div className={styles.fullscreenImageNavButtons}>
              <button className={styles.navButton} onClick={handlePreviousImage}>
                Назад
              </button>
              <button className={styles.navButton} onClick={handleNextImage}>
                Далее
              </button>
            </div>
          </div>
        </div>
      )}
      <div>
        <ul className={styles.flexGallery}>
          {portfolioNavData.map((item, index) => (
            <li
              key={index}
              className={`${active === index ? styles.activeProfile : ''} ${styles.profileBtn}`}>
              <button onClick={(e) => handleClick(e, index)}>{item.name}</button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.profileGridCategory1}>
        {galleryItems &&
          profileGalleryUpData
            .filter((project) => project.category === galleryItems)
            .map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ x: -550, opacity: 0.5 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }} // Animation duration and delay based on index
              >
                <PortfolioCard
                  image={item.image}
                  title={item.title}
                  index={index}
                  onClick={() => handleImageClick(item.image)}
                />
              </motion.div>
            ))}
      </div>
      <div className={styles.profileGridCategory2}>
        {galleryItems &&
          profileGalleryDownData
            .filter((project) => project.category === galleryItems)
            .map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ x: 550, opacity: 0.5 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }} // Animation duration and delay based on index
              >
                <PortfolioCard
                  image={item.image}
                  title={item.title}
                  index={index}
                  onClick={() => handleImageClick(item.image)}
                />
              </motion.div>
            ))}
      </div>

      <div className={styles.profileBtnBottom}>
        <button onClick={handlePrevious}>Назад</button>
        <button onClick={handleNext}>Далее</button>
      </div>
    </div>
  );
};

export default PortfolioGallery;
