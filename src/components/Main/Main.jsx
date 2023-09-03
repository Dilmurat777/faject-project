import s from './Main.module.scss';
import { motion } from 'framer-motion';
import img1 from '../../assets/Main/home1.webp';
import img2 from '../../assets/Main/home2.webp';
import img3 from '../../assets/Main/home3.webp';
import img4 from '../../assets/Main/home4.webp';
import BookForm from '../BookForm/BookForm';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PopupButton from '../Popup/PopupButton/PopupButton';

const Main = () => {
  const { t, i18n } = useTranslation();


  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <section className={s.home} id={'home'}>
      <div className={s.container}>
        <div className={s.homeBlog}>
          <div className={s.homeInfo}>
            <motion.h1
              initial={{ x: -150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
              className={s.homeTitle}>
              Faject
            </motion.h1>
            <motion.p
              initial={{ x: -250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className={s.homeText}>
              {t('main.text')}
            </motion.p>
            <motion.div
              initial={{ x: -250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              onAnimationComplete={handleAnimationComplete}
              className={s.bookButtonBlock}>
              <PopupButton
                className={s.bookButton}
                disabled={() => !animationComplete}
                content={BookForm}>
                {t('main.btn-text')}
              </PopupButton>
            </motion.div>
          </div>
          <div className={s.homeImages}>
            <motion.div
              initial={{ x: -350, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
              className={s.image1}>
              <img src={img1} alt="" />
            </motion.div>
            <motion.div
              initial={{ y: -150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className={s.image2}>
              <img src={img2} alt="" />
            </motion.div>
            <motion.div
              initial={{ x: 250, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className={s.image3}>
              <img src={img3} alt="" />
            </motion.div>
            <motion.div
              initial={{ x: 350, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className={s.image4}>
              <img src={img4} alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
