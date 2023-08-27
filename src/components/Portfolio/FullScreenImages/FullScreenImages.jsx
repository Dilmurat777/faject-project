// import React from 'react';
// import Header from '../../Header/Header';
// import { AiOutlineClose } from 'react-icons/ai';
// import { useTranslation } from 'react-i18next';
// import styles from './FullScreenImages.module.scss';

// const FullScreenImages = ({
//   fullscreen,
//   handleCloseFullImage,
//   getCurrentImages,
//   currentImageIndex,
//   fullscreenHandleNext,
//   fullscreenHandlePrevious,
//   // setCurrentImageIndex,
//   // setFullscreen,
// }) => {
//   const { t, i18n } = useTranslation();

//   const variants = {
//     initial: (direction) => {
//       return { x: direction > 0 ? 800 : -800, opacity: 0 };
//     },
//     animate: { x: 0, opacity: 1 },
//     exit: (direction) => {
//       return { x: direction > 0 ? -800 : 800, opacity: 0 };
//     },
//   };

//   return (
//     <div className={styles.fullscreenImgOverlay}>
//       <Header/>
//       <button className={styles.closeButton} onClick={handleCloseFullImage}>
//         <AiOutlineClose />
//       </button>
//       <div className={styles.fullscreenWrapper}>
//         <AnimatePresence initial={false}>
//           <motion.img
//             variants={variants}
//             initial="initial"
//             animate="animate"
//             transition={{
//               type: 'tween',
//               duration: 0.5,
//             }}
//             custom={direction}
//             className={styles.fullscreenImage}
//             src={fullscreen}
//             key={fullscreen}
//             alt="full screen images"
//           />
//         </AnimatePresence>
//         {/* Add any other content */}
//         <div className={styles.fullscreenImageNavDots}>
//           {getCurrentImages().map((item, index) => (
//             <div
//               key={index}
//               className={`${styles.navDot} ${
//                 index === currentImageIndex ? styles.activeDot : ''
//               }`}
//               onClick={() => {
//                 setCurrentImageIndex(index);
//                 setFullscreen(getCurrentImage(index));
//               }}
//             ></div>
//           ))}
//         </div>
//         {/* Add the text and buttons */}
//         <p className={styles.fullscreenText}>{t('portfolio.desc')}</p>
//         <div className={styles.fullscreenButtons}>
//           <button className={`${styles.portfolioBtn} ${styles.fullscreenBtn}`} onClick={fullscreenHandlePrevious}>
//             {t('buttons.back')}
//           </button>
//           <button className={`${styles.portfolioBtn} ${styles.fullscreenBtn}`} onClick={fullscreenHandleNext}>
//             {t('buttons.next')}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FullScreenImages;

{
  /* <FullScreenImages fullscreen={fullscreen} handleCloseFullImage={handleCloseFullImage} getCurrentImages={getCurrentImages} setCurrentImageIndex={setCurrentImageIndex} setFullscreen={setFullscreen} currentImageIndex={currentImageIndex} fullscreenHandleNext={fullscreenHandleNext} fullscreenHandlePrevious={fullscreenHandlePrevious} getCurrentImage={getCurrentImage}/> */
}
