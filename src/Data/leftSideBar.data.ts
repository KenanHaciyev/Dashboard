import dashboard from '../assets/icons/sideBarIcons/dashboard.svg';
import forecast from '../assets/icons/sideBarIcons/forecast.svg';
import offices from '../assets/icons/sideBarIcons/offices.svg';
import employees from '../assets/icons/sideBarIcons/employees.svg';
import { INavigationItems } from '../types/navigationItems.js';

export const navigationItems: INavigationItems[] = [
	{
		title: 'Dashboard',
		icon: dashboard
	},
	{
		title: 'Forecast',
		icon: forecast
	},
	{
		title: 'All offices',
		icon: offices
	},
	{
		title: 'Employees',
		icon: employees
	},]