import { IRatingItems } from '../types/ratingItems';
import virus from '../assets/icons/ratingIcons/virus.svg';
import smile from '../assets/icons/ratingIcons/smile.svg';
import syringe from '../assets/icons/ratingIcons/syringe.svg';
import mask from '../assets/icons/ratingIcons/mask.svg';

export const ratingItemsData: IRatingItems[] = [
	{
		text: 'Estimated office infection rate:',
		iconUrl: virus,
		percent: '0.3% (low)',
		color: 'rgba(19, 195, 19, 0.8)',
	},
	{
		text: 'Employee satisfaction rate:',
		iconUrl: smile,
		percent: '65% (high)',
		color: 'rgba(19, 195, 19, 0.8)',
	},
	{
		text: 'Employee vaccination rate:',
		iconUrl: syringe,
		percent: '10%',
		color: 'var(--main-blue)',
	},
	{
		text: 'Mask compliance:',
		iconUrl: mask,
		percent: 'No',
		color: 'var(--main-blue)',
	},
];
