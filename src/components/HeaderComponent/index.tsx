import React from 'react';
import styles from './headerComponent.module.css';
import TabsNavigation from '../TabsNavigation';

const HeaderComponent: React.FC = () => {
	return (
		<>
			<header className={styles.header}>Dashboard</header>
			<TabsNavigation />
		</>
	);
};

export default HeaderComponent;
