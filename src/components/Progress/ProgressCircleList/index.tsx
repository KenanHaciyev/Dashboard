import React from 'react';
import { progressCircleData } from '../../../Data/progressCircle.data.ts';
import ProgressCircle from '../ProgressCircle';
import styles from './progressCircleList.module.css';

const ProgressCircleList : React.FC= () => {
	return (
		<div className={styles.progressList} >
			{
				progressCircleData.map((data, i) => {
					return <ProgressCircle key={i} {...data} />
				})
			}
		</div>
	);
};

export default ProgressCircleList;
