import React from 'react';
import styles from './rating.module.css';

interface IRatingProps {
	text: string;
	color: string;
	percent: string;
	iconUrl: string;
}
const Rating: React.FC<IRatingProps> = ({ text, color, percent, iconUrl }) => {
	return (
		<div className={styles.wrap}>
			<div className={styles.img}>
				<img src={iconUrl} alt="icon" />
			</div>
			<div className={styles.content}>
				<p className={styles.text}>{text}</p>
				<div style={{ color: `${color}` }}>{percent}</div>
			</div>
		</div>
	);
};

export default Rating;
