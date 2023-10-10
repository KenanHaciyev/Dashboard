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
			<img src={iconUrl} alt="icon" />
			<div className={styles.content} >
				<div className={styles.text} >{text}</div>
				<div className={styles.percent} style={{ color: `${color}` }}>{percent}</div>
			</div>
		</div>
	);
};

export default Rating;
