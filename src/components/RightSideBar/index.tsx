import React from 'react';
import styles from './rightSideBar.module.css';
import ProgressLine from '../Progress/ProgressLine';
import { tooltipData } from '../../Data/tooltip.data.ts';
import TooltipLine from '../TooltipLine';
import { ratingItemsData } from '../../Data/ratingItems.data.ts';
import Rating from '../Rating';

const RightSideBar: React.FC = () => {
	return (
		<div className={styles.wrap}>
			<header className={styles.header}>
				<h2>Dallas Office</h2>
				<small>View Details</small>
			</header>
			<small className={styles.details}>
				<b>40</b> shared desks + <b>39</b> private offices Maximum capacity: <b>96 people</b>
			</small>
			<h5 className={styles.occupancy}>Current office occupancy:</h5>
			<ProgressLine percent={50} people={48} />
			<h5 className={styles.criteria}>Criteria for increasing occupancy:</h5>
			{tooltipData.map((props, i) => (
				<TooltipLine key={i} {...props} />
			))}
			{ratingItemsData.map((data, i) => (
				<Rating key={i} {...data} />
			))}
		</div>
	);
};

export default RightSideBar;
