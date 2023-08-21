import React from 'react';
import styles from './Card.module.scss';


    const Card = ({ image, title, handelImage }) => {
      return (
        <div>
          <div className={styles.cardImagesItem}>
            <img className={styles.cardImages} src={image} alt="images slider" onClick={handelImage} />
            <div className={styles.cardTextBg}>
              <p className={styles.cardText}>{title}</p>
            </div>
          </div>
        </div>
      );
    };
    
export default Card;



