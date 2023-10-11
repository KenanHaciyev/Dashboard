import React from 'react';
import { tooltipData } from '../../Data/tooltip.data.ts';
import TooltipItem from '../TooltipItem';

const TooltipItemList:React.FC = () => {
	return (
		<>
			{tooltipData.map((props, i) => (
				<TooltipItem key={i} {...props} />
			))}
		</>
	);
};

export default TooltipItemList ;
