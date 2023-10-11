import React from 'react';
import styles from './mainPage.module.css';
import LeftSideBar from '../../components/LeftSideBar';
import RightSideBar from '../../components/RightSideBar';
import HeaderComponent from '../../components/HeaderComponent';
import RecommendationsCard from '../../components/ForecastCard';

const MainPage: React.FC = () => {
	return (
			<div className={styles.wrap}>
				<LeftSideBar />
				<main className={styles.content}>
					<HeaderComponent />
					<div className={styles.container} >
						<RecommendationsCard/>
						<RightSideBar />
					</div>
				</main>
			</div>
	);
};

export default MainPage;
