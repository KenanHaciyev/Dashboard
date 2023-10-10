import React from 'react';
import styles from './tooltipLine.module.css';
import { Tooltip } from 'antd';

interface ITooltipLineProps{
	title: string,
	titleTooltip: string,
	text: string,
	color: string
}

const TooltipLine: React.FC<ITooltipLineProps> = ({title, titleTooltip, text, color}) => {
	return (
		<div className={styles.guidelines} >
			<div className={styles.guidelines__left}>
				<div>{title}</div>
				<Tooltip title={titleTooltip}>
					<span className={styles.symbol} >?</span>
				</Tooltip>
			</div>
			<div style={{color: color}} >{text}</div>
		</div>
	);
};

export default TooltipLine;
