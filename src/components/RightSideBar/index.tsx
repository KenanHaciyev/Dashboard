import React from 'react';

import ProgressLine from '../Progress/ProgressLine';
import TooltipItemList from '../TooltipItemList';
import RatingList from '../RatingList';

import styles from './rightSideBar.module.css';

const RightSideBar: React.FC = () => {
	return (
		<aside className={styles.wrap}>
			<header className={styles.header}>
				<h2>Dallas Office</h2>
				<small className={styles.view}>View Details</small>
			</header>
			<small className={styles.details}>
				<b>40</b> shared desks + <b>39</b> private offices Maximum capacity: <b>96 people</b>
			</small>
			<h5 className={styles.occupancy}>Current office occupancy:</h5>
			<ProgressLine percent={50} people={48} />
			<h5 className={styles.criteria}>Criteria for increasing occupancy:</h5>
			<TooltipItemList />
			<RatingList />
		</aside>
	);
};

export default RightSideBar;
