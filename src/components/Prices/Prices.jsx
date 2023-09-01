import styles from './Prices.module.scss';
import PricesCard from './PricesCard/PricesCard';
import { PricesData1 } from './data';
import { PricesData2 } from './data';
import { motion } from 'framer-motion';
import HorizontalScroll from "../../UI/HorizontalScroll/HorizontalScroll";

const textRight = {
  hidden: {
    y: -150,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: custom * 0.2 },
  }),
};

const textLeft = {
  hidden: {
    y: 150,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: custom * 0.2 },
  }),
};

const Prices = () => {
  return (
    <section className={styles.prices} id={'prices'}>
      <div className={styles.container}>
      <HorizontalScroll>
      <div className={styles.priceBlock}>
        <div className={styles.priceItems}>
          {PricesData1.map((service) => (
            <motion.div
            custom={2}
            variants={textRight}
            initial="hidden"
            whileInView="visible"
              key={service.id}
            viewport={{ amount: 0.2, once: true }}>
            
              <PricesCard
              title={service.title}
              desc1={service.desc1}
              desc2={service.desc2}
              desc3={service.desc3}
              desc4={service.desc4}
              desc5={service.desc5}
              desc6={service.desc6}
              price={service.price}
            />
            </motion.div>
          ))}
           {PricesData2.map((service) => (
            <motion.div
            custom={2}
            variants={textLeft}
            initial="hidden"
            whileInView="visible"
              key={service.id}
            viewport={{ amount: 0.2, once: true }}>
            
              <PricesCard
              title={service.title}
              desc1={service.desc1}
              desc2={service.desc2}
              desc3={service.desc3}
              desc4={service.desc4}
              desc5={service.desc5}
              desc6={service.desc6}
              price={service.price}
            />
            </motion.div>
          ))}
        </div>
      </div>
        </HorizontalScroll>
      </div>
    </section>
  );
};

export default Prices;
