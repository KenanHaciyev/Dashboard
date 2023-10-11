import React from 'react';
import styles from './tooltipItem.module.css';
import { Tooltip } from 'antd';

interface ITooltipItemProps{
	title: string,
	titleTooltip: string,
	text: string,
	color: string
}

const TooltipItem: React.FC<ITooltipItemProps> = ({title, titleTooltip, text, color}) => {
	return (
		<div className={styles.wrap} >
			<div className={styles.left}>
				<div>{title}</div>
				<Tooltip title={titleTooltip}>
					<span className={styles.symbol} >?</span>
				</Tooltip>
			</div>
			<div style={{color: color}} >{text}</div>
		</div>
	);
};

export default TooltipItem;
