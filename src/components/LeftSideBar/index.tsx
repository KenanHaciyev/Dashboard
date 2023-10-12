import React from 'react';
import { ConfigProvider } from 'antd';

import DropdownComponent from '../DropdownComponent';
import logo from '../../assets/img/logo.png';
import MenuItemList from '../MenuItemList';

import styles from './leftSidebar.module.css';

const SideBar: React.FC = () => {
	return (
		<aside className={styles.aside}>
			<div className={styles.top}>
				<div className={styles.logo}>
					<div className={styles.image}>
						<img src={logo} alt="logo" />
					</div>
					<h3> Haven Diagnostics</h3>
				</div>

				<ConfigProvider
					theme={{
						components: {
							Menu: {
								itemColor: 'var(--main-gray)',
								itemHoverColor: 'var(--main-blue)',
								horizontalLineHeight: 0,
							},
						},
					}}
				>
					<MenuItemList />
				</ConfigProvider>
			</div>

			<DropdownComponent isProfile={true} />
		</aside>
	);
};

export default SideBar;
