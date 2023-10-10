import dashboard from '../components/LeftSideBar/icons/dashboard.svg';
import forecast from '../components/LeftSideBar/icons/forecast.svg';
import offices from '../components/LeftSideBar/icons/offices.svg';
import employees from '../components/LeftSideBar/icons/employees.svg';
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