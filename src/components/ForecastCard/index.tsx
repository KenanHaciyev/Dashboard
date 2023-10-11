import React from 'react';

import ProgressCircleList from '../Progress/ProgressCircleList';
import DropdownComponent from '../DropdownComponent';
import ProgressLine from '../Progress/ProgressLine';

import styles from './forecastCard.module.css';

const ForecastCard: React.FC = () => {
	return (
		<div className={styles.wrapper}>
			<header className={styles.title}>Forecast & recommendations</header>
			<h5>Currently recommended occupancy:</h5>
			<ProgressLine percent={39} people={37} />
			<div className={styles.targets}>
				<h5>Occupancy targets:</h5>
				<div>
					<span className={styles.numbers}>75</span>
					<DropdownComponent />
				</div>
			</div>
			<ProgressCircleList />
			<h5 style={{ marginBottom: '10px' }}>
				Maximum recommended occupancy for vaccination rate and mask compliance rate:
			</h5>
			<ProgressLine percent={38} people={34} title="Employees vaccinated:" />
			<small className={styles.small}>Current vaccination rate: 10% (9 people)</small>
			<ProgressLine title="Employees using masks:" people={26} percent={30} />
			<footer className={styles.footer}>
				Current recommended occupancy would be <b>47% (45 people)</b> if your vaccination rate was{' '}
				<b>38%</b> and your mask compliance rate was <b>30%</b>
			</footer>
		</div>
	);
};

export default ForecastCard;
