import React from 'react';
import { Progress } from 'antd';
import styles from './progressLine.module.css';

interface IProgressLineProps {
	percent: number;
	people: number;
	title?: string;
}
const ProgressLine: React.FC<IProgressLineProps> = ({ percent, people, title }) => {
	return (
		<div>
			<div className={styles.info}>
				<>
					{title && <div className={styles.title}>{title}</div>}
					<div>
						<span style={{ fontSize: title ? '15px' : '' }} className={styles.percent}>
							{percent}%
						</span>
						<span style={{ fontSize: title ? '15px' : '' }} className={styles.people}>
							{title ? ` (${people} people)` : `${people} people`}
						</span>
					</div>
				</>
			</div>
			<Progress
				showInfo={false}
				className={styles.progressLine}
				percent={percent}
				status="active"
			/>
		</div>
	);
};

export default ProgressLine;
