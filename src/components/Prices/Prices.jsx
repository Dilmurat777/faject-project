import styles from './Prices.module.scss';
import PricesCard from './PricesCard/PricesCard';
import { PricesData } from './data';

const Prices = () => {
  return (
    <section className={styles.prices} id={'prices'}>
      <div className={styles.container}>
        <div className={styles.priceItems}>
          {PricesData.map((service) => (
            <PricesCard
              key={service.id}
              title={service.title}
              desc1={service.desc1}
              desc2={service.desc2}
              desc3={service.desc3}
              desc4={service.desc4}
              desc5={service.desc5}
              desc6={service.desc6}
              price={service.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prices;
