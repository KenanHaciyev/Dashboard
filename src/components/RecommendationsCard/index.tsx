import React from 'react';
import ProgressLine from '../Progress/ProgressLine';
import styles from './recommendationsCard.module.css';
import ProgressCircle from '../Progress/ProgressCircle';

const RecommendationsCard: React.FC = () => {
	return (
		<div className={styles.wrapper}>
			<h2>Forecast & recommendations</h2>
			<h5>Currently recommended occupancy:</h5>
			<ProgressLine percent={39} people={37} />
			<div className={styles.targets}>
				<h5>Occupancy targets:</h5>
				<div>
					<span className={styles.numbers}>75</span>
					<select className={styles.select}>
						<option>People</option>
						<option>Adults</option>
						<option>Children</option>
					</select>
				</div>
			</div>
			<div className={styles.progressWrap}>
				<ProgressCircle percent={80} weeks={4} />
				<ProgressCircle percent={88} weeks={8} />
				<ProgressCircle percent={96} weeks={12} />
			</div>
			<h5>Maximum recommended occupancy for vaccination rate and mask compliance rate:</h5>
			<ProgressLine percent={38} people={34} title="Employees vaccinated:" />
			<small className={styles.small}>Current vaccination rate: 10% (9 people)</small>
			<ProgressLine title="Employees using masks:" people={26} percent={30} />
			<p className={styles.description} >
				Current ecommended occupancy would be <b>47% (45 people)</b> if your vaccination rate was <b>38%</b> and
				your mask compliance rate was <b>30%</b>
			</p>
		</div>
	);
};

export default RecommendationsCard;
