import React from 'react';
import styles from './mainPage.module.css';
import LeftSideBar from '../../components/LeftSideBar';
import HeaderComponent from '../../components/HeaderComponent';
import { Outlet } from 'react-router-dom';

const MainPage: React.FC = () => {
	return (
		<div className={styles.wrap}>
			<LeftSideBar />
			<main className={styles.content}>
				<HeaderComponent />
				<Outlet />
			</main>
		</div>
	);
};

export default MainPage;
