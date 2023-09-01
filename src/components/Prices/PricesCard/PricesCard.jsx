import IconServices from '../../../assets/PricesImage/PricesIconServices';
import styles from './PricesCard.module.scss';


const PricesCard = ({ title, desc1, desc2, desc3, desc4, desc5, desc6, price }) => {
  return (
    
    <div className={styles.pricesCard}>
      <h3 className={styles.pricesTitle}>{title}</h3>
      <div className={styles.pricesDesc}><IconServices/>{desc1}</div>
      <div className={styles.pricesDesc}><IconServices/>{desc2}</div>
      <div className={styles.pricesDesc}><IconServices/>{desc3}</div>
      <div className={styles.pricesDesc}><IconServices/>{desc4}</div>
      <div className={styles.pricesDesc}><IconServices/>{desc5}</div>
      <div className={styles.pricesDesc}><IconServices/>{desc6}</div>
      <div className={styles.pricesPrice}>От {price} ₽</div>
    </div>
  );
};

export default PricesCard;
