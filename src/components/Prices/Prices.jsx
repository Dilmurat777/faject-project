import { motion } from 'framer-motion';
import HorizontalScroll from "../../UI/HorizontalScroll/HorizontalScroll";
import styles from './Prices.module.scss';
import PriceCard from './PriceCard/PriceCard';


const Prices = () => {

  return (
    <section className={styles.prices} id={'prices'}>
      <div className={styles.container}>
        <HorizontalScroll>
          <div className={styles.priceBlock}>
            <div>
							<PriceCard/>
						</div>
          </div>
        </HorizontalScroll>
      </div>
    </section>	
  );
};

export default Prices;
