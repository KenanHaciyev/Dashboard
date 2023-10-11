import React from 'react';
import { ratingItemsData } from '../../Data/ratingItems.data.ts';
import Rating from '../Rating';

const RatingList: React.FC = () => {
	return (
		<>
			{ratingItemsData.map((data, i) => (
				<Rating key={i} {...data} />
			))}
		</>
	);
};

export default RatingList;
