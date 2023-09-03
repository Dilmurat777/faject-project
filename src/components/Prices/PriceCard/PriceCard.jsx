import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import IconServices from '../../../assets/PricesImage/PricesIconServices';
import { motion } from 'framer-motion';
import styles from './PricesCard.module.scss';
import { useContext } from 'react';
import { PopupContext } from '../../../App';


const textUp = {
  hidden: {
    y: -190,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: custom * 0.2 },
  }),
};

const textDown = {
  hidden: {
    y: 190,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.9, delay: custom * 0.2 },
  }),
};
const PriceCard = () => {
	const { t } = useTranslation()

	 // Определите медиа-запрос для маленьких экранов
	 const isSmallScreen = useMediaQuery({ maxWidth: 768 }); // Измените эту ширину по вашему усмотрению

	 const {setIsModal} = useContext(PopupContext)

	return (
		<div className={styles.priceItems}>
				<motion.div
				onClick={()=>setIsModal((prev)=>!prev)} 
				 custom={2}
				 variants={isSmallScreen ? {} : textUp} // Применяем анимацию только на больших экранах
				 initial={isSmallScreen ? "visible" : "hidden"} // Если это маленький экран, делаем анимацию видимой сразу
				 whileInView="visible"
				 viewport={{ amount: 0.2, once: true }}
				 className={styles.pricesCard}>
								<h3 className={styles.pricesTitle}>{t('prices.title-bot')}</h3>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.bot1')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.bot2')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.bot3')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.bot4')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.bot5')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.bot6')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.bot7')}</div>
								<div className={styles.pricesPrice}>{t('prices.from-bot')} 50 $</div>
					</motion.div>

					<motion.div
					onClick={()=>setIsModal((prev)=>!prev)}
					 custom={2}
					 variants={isSmallScreen ? {} : textUp} // Применяем анимацию только на больших экранах
					 initial={isSmallScreen ? "visible" : "hidden"} // Если это маленький экран, делаем анимацию видимой сразу
					 whileInView="visible"
					 viewport={{ amount: 0.2, once: true }}
					className={styles.pricesCard}>
								<h3 className={styles.pricesTitle}>{t('prices.title-seo')}</h3>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.seo1')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.seo2')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.seo3')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.seo4')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.seo5')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.seo6')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.seo7')}</div>
								<div className={styles.pricesPrice}>{t('prices.from-seo')} 200 $</div>
					</motion.div>

					<motion.div
					onClick={()=>setIsModal((prev)=>!prev)} 
					  custom={2}
						variants={isSmallScreen ? {} : textUp}
						initial={isSmallScreen ? "visible" : "hidden"}
						whileInView="visible"
						viewport={{ amount: 0.2, once: true }}
					className={styles.pricesCard}>
								<h3 className={styles.pricesTitle}>{t('prices.title-smm')}</h3>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.smm1')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.smm2')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.smm3')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.smm4')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.smm5')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.smm6')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.smm7')}</div>
								<div className={styles.pricesPrice}>{t('prices.from-smm')} 150 $</div>
					</motion.div>

					<motion.div
					onClick={()=>setIsModal((prev)=>!prev)} 
					 custom={2}
					 variants={isSmallScreen ? {} : textDown} // Применяем анимацию только на больших экранах
					 initial={isSmallScreen ? "visible" : "hidden"} // Если это маленький экран, делаем анимацию видимой сразу
					 whileInView="visible"
					 viewport={{ amount: 0.2, once: true }}
					className={styles.pricesCard}>
								<h3 className={styles.pricesTitle}>{t('prices.title-advertising')}</h3>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.advertising1')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.advertising2')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.advertising3')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.advertising4')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.advertising5')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.advertising6')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.advertising7')}</div>
								<div className={styles.pricesPrice}>{t('prices.from-advertising')} 500 $</div>
					</motion.div>

					<motion.div
					onClick={()=>setIsModal((prev)=>!prev)} 
					 custom={2}
					 variants={isSmallScreen ? {} : textDown} // Применяем анимацию только на больших экранах
					 initial={isSmallScreen ? "visible" : "hidden"} // Если это маленький экран, делаем анимацию видимой сразу
					 whileInView="visible"
					 viewport={{ amount: 0.2, once: true }}
					className={styles.pricesCard}>
								<h3 className={styles.pricesTitle}>{t('prices.title-mobile')}</h3>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.mobile1')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.mobile2')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.mobile3')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.mobile4')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.mobile5')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.mobile6')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.mobile7')}</div>
								<div className={styles.pricesPrice}>{t('prices.from-mobile')} 450 $</div>
					</motion.div>

					<motion.div
					onClick={()=>setIsModal((prev)=>!prev)} 
					  custom={2}
						variants={isSmallScreen ? {} : textDown}
						initial={isSmallScreen ? "visible" : "hidden"}
						whileInView="visible"
						viewport={{ amount: 0.2, once: true }}
					className={styles.pricesCard}>
								<h3 className={styles.pricesTitle}>{t('prices.title-website')}</h3>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.website1')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.website2')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.website3')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.website4')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.website5')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.website6')}</div>
								<div className={styles.pricesDesc}><IconServices/>{t('prices.website7')}</div>
								<div className={styles.pricesPrice}>{t('prices.from-website')} 50 $</div>
					</motion.div>

					
		</div>
	)
}

export default PriceCard
