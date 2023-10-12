import React from 'react';
import ForecastCard from '../ForecastCard';
import RightSideBar from '../RightSideBar';
import styles from './promo.module.css'

const Promo : React.FC= () => {

	return (
		<div className={styles.container} >
			<ForecastCard/>
			<RightSideBar />
		</div>
	);
};

export default Promo;
