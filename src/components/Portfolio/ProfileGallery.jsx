import React, { useEffect, useState } from 'react';
import { profileNavData, profileGalleryUpData, profileGalleryDownData } from './Data';
import ProfileCard from './ProfileCard';
import { AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';


import styles from './Profile.module.css';
const categoryDefault = 'Разработка веб-сайта - 73';

const ProfileGallery = () => {
  const [galleryItems, setGalleryItems] = useState(categoryDefault);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  useEffect(() => {
    const newProject = profileGalleryUpData.filter((project) => {
      return project.category === galleryItems;
    });
    setFilteredProjects(newProject);
  }, [galleryItems]);

  useEffect(() => {
    // Automatically change images every 3 seconds
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [active]);

  const handleClick = (e, index) => {
    setGalleryItems(e.target.textContent);
    setActive(index);
  };

  const handleNext = () => {
    const nextIndex = (active + 1) % profileNavData.length;
    setGalleryItems(profileNavData[nextIndex].name);
    setActive(nextIndex);
  };

  const handlePrevious = () => {
    const nextIndex = (active - 1 + profileNavData.length) % profileNavData.length;
    setGalleryItems(profileNavData[nextIndex].name);
    setActive(nextIndex);
  };

  const handleImageClick = (image) => {
    setFullscreenImage(image);
  };

  const handleCloseFullscreen = () => {
    setFullscreenImage(null);
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    const totalImages = getTotalImages();
    const nextIndex = (currentImageIndex + 1) % totalImages;
    setCurrentImageIndex(nextIndex);
    setFullscreenImage(getCurrentImage(nextIndex));
  };
  
  const handlePreviousImage = (e) => {
    e.stopPropagation();
    const totalImages = getTotalImages();
    const previousIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    setCurrentImageIndex(previousIndex);
    setFullscreenImage(getCurrentImage(previousIndex));
  };
  

  const getCurrentImage = (index) => {
    const images = getCurrentImages();
    return images[index]?.image;
  };

  const getCurrentImageIndex = () => {
    const images = getCurrentImages();
    return images.findIndex((item) => item.image === fullscreenImage);
  };

  const getTotalImages = () => {
    const images = getCurrentImages();
    return images.length;
  };

  const getCurrentImages = () => {
    return profileGalleryUpData
      .concat(profileGalleryDownData)
      .filter((project) => project.category === galleryItems);
  };

  return (
    <div>
      {fullscreenImage && (
        <div className={styles.fullscreenImageOverlay} onClick={handleCloseFullscreen}>
          <img className={styles.fullscreenImage} src={fullscreenImage} alt="error(: " />
          <button className={styles.closeButton} onClick={handleCloseFullscreen}>
            <AiOutlineClose />
          </button>
          <div className={styles.profileText}>
            <p>
              Создание брендинга для депо-стартапа - это процесс разработки уникального и
              запоминающегося логотипа, фирменного стиля и других элементов бренда, которые помогут
              выделить проект на рынке и привлечь внимание потенциальных клиентов.
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
      )}
      <div>
        <ul className={styles.flexGallery}>
          {profileNavData.map((item, index) => (
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
                <ProfileCard
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
                <ProfileCard
                  image={item.image}
                  title={item.title}
                  index={index}
                  onClick={() => handleImageClick(item.image)}
                />
              </motion.div>
            ))}
      </div>


      <div className={styles.fullscreenImageNavDots}>
        {getCurrentImages().map((item, index) => (
          <div
            key={index}
            className={`${styles.navDot} ${index === currentImageIndex ? styles.activeDot : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          ></div>
        ))}
      </div>


      <div className={styles.profileBtnBottom}>
        <button onClick={handlePrevious}>Назад</button>
        <button onClick={handleNext}>Далее</button>
      </div>
    </div>
  );
};

export default ProfileGallery;
