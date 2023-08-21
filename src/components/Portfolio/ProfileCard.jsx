import React from 'react';
import styles from './Profile.module.css';

const ProfileCard = ({ image, title, onClick }) => {
  // Add the onClick prop

  return (
    <div className={styles.profileCardBlog}>
      <div className={styles.profileCard}>
        <img src={image} alt="error(:" onClick={onClick} /> {/* Add the onClick handler */}
      </div>
      <div>
        <h3 className={styles.profileCardName}>{title}</h3>
      </div>
    </div>
  );
};

export default ProfileCard;
