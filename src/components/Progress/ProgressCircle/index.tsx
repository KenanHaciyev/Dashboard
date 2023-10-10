import React, { useEffect, useState } from 'react';
import { ConfigProvider, Progress } from 'antd';
import styles from './progressCircle.module.css';

interface IProgressCircle {
	percent: number;
	weeks: number;
}

const ProgressCircle: React.FC<IProgressCircle> = ({ percent, weeks }) => {
	const [statusText, setStatusText] = useState('Possible');

	useEffect(() => {
		if (percent >= 88 && percent <= 95) {
			setStatusText('Likely');
		} else if (percent > 95) {
			setStatusText('Yes');
		} else {
			setStatusText('Possible');
		}
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
					type="circle"
					percent={percent}
					strokeWidth={9}
					format={() => {
						return (
							<div className={styles.info}>
								<div className={styles.status}>{statusText}</div>
								<div className={styles.percent}>{percent}%</div>
							</div>
						);
					}}
					strokeColor={percent >= 88 ? 'rgb(19 195 19 / 80%)' : 'rgb(255 186 0)'}
					className={styles.progress}
				/>
			</ConfigProvider>
		</div>
	);
};

export default ProgressCircle;
