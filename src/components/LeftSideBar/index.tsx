import React, { useState } from 'react';
import { ConfigProvider, Tabs } from 'antd';

import { navigationItems } from '../../Data/leftSideBar.data.ts';
import DropdownComponent from '../DropdownComponent';
import logo from '../../assets/img/logo.png';

import styles from './leftSidebar.module.css';

const SideBar: React.FC = () => {
	const [active, setActive] = useState('0');
	const items = navigationItems.map((item, i) => {
		const id = `${i}`;
		const isActiveIcon = active == id ? styles.active : '';
		const isActiveTitle = active == id ? styles.activeTitle : '';

		return {
			label: (
				<span className={styles.itemsWrap} onClick={() => setActive(id)}>
					<img src={item.icon} alt="icon" className={isActiveIcon} />
					<div className={isActiveTitle}>{item.title}</div>
				</span>
			),
			key: id,
		};
	});

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
							Tabs: {
								itemHoverColor: 'gray',
								itemColor: 'var(--main-gray)',
								itemSelectedColor: 'var(--dark-blue)',
							},
						},
					}}
				>
					<Tabs tabPosition="right" activeKey={active} items={items} />
				</ConfigProvider>
			</div>
			<DropdownComponent isProfile={true} />
		</aside>
	);
};

export default SideBar;
