import React from 'react';
import styles from './mainPage.module.css';
import Promo from '../../components/Promo';
import LeftSideBar from '../../components/LeftSideBar';
import RightSideBar from '../../components/RightSideBar';
import TabsNavigation from '../../components/TabsNavigation';

const MainPage: React.FC = () => {
	return (
		<div className={styles.wrap}>
			<LeftSideBar />
			<div className={styles.main}>
				<header className={styles.header}>Dashboard</header>
				<TabsNavigation/>
				<main className={styles.content} >
          <Promo />
          <RightSideBar />
        </main>
			</div>
		</div>
	);
};

export default MainPage;
