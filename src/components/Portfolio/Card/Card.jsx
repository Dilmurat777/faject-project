import React from 'react';
import styles from './Card.module.scss';


    const Card = ({ image, title, handelImage, alt }) => {
      return (
        <div>
          <div className={styles.cardImagesItem}>
            <img className={styles.cardImages} src={image} alt={alt} onClick={handelImage} />
            <div className={styles.cardTextBg}>
              <p className={styles.cardText}>{title}</p>
            </div>
          </div>
        </div>
      );
    };
    
export default Card;



