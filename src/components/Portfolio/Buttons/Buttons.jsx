import React from 'react';
import styles from './Buttons.module.scss';
import { portfolioNavData } from '../data';

const Buttons = ({ handelNavClick, active }) => {

	

  return (
		<div className={styles.buttonItems}>
		{portfolioNavData.map((item, index) => (
			<button
				key={index}
				onClick={(e) => handelNavClick(e, index)}
				className={`${active === index ? styles.activeButtonItem : ''} ${styles.buttonItem}`}>
				{item.name}
			</button>
		))}
	</div>
  );
};

export default Buttons;
