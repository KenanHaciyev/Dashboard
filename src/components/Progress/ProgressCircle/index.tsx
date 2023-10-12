import React, { useEffect, useState } from 'react';
import { ConfigProvider, Progress } from 'antd';
import styles from './progressCircle.module.css';

interface IProgressCircleProps {
	percent: number;
	weeks: number;
}

const ProgressCircle: React.FC<IProgressCircleProps> = ({ percent, weeks }) => {
	const [statusText, setStatusText] = useState('');
	const progressTextFormat = () => (
		<div className={styles.info}>
			<div className={styles.status}>{statusText}</div>
			<div className={styles.percent}>{percent}%</div>
		</div>
	);

	useEffect(() => {
		const defineStatusText = () => {
			if (percent >= 88 && percent <= 95) return 'Likely';
			if (percent > 95) return 'Yes';
			return 'Possible';
		};
		setStatusText(defineStatusText());
	}, []);

	return (
		<div className={styles.wrap}>
			<h5 className={styles.weeks}>{weeks} weeks</h5>
			<ConfigProvider
				theme={{
					token: {
						colorText: 'var(--main-gray)',
					},
				}}
			>
				<Progress
					type="dashboard"
					gapDegree={5}
					gapPosition="right"
					percent={percent}
					strokeWidth={9}
					format={progressTextFormat}
					strokeColor={percent >= 88 ? 'rgb(19 195 19 / 80%)' : 'rgb(255 186 0)'}
					className={styles.progress}
				/>
			</ConfigProvider>
		</div>
	);
};

export default ProgressCircle;
