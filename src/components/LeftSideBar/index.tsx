import React from 'react';
import { ConfigProvider, Menu } from 'antd';
import { Link } from 'react-router-dom';

import { navigationItems } from '../../Data/leftSideBar.data.ts';
import DropdownComponent from '../DropdownComponent';
import logo from '../../assets/img/logo.png';

import styles from './leftSidebar.module.css';
import {
	AppstoreFilled,
	BankOutlined,
	RiseOutlined,
	UsergroupAddOutlined,
} from '@ant-design/icons';

const SideBar: React.FC = () => {
	const icons: JSX.Element[] = [
		<AppstoreFilled />,
		<RiseOutlined />,
		<BankOutlined />,
		<UsergroupAddOutlined />,
	];

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
								horizontalLineHeight: 0
							},
						},
					}}
				>
					<Menu defaultSelectedKeys={['0']} >
						{navigationItems.map((item, i) => {
							return (
								<Menu.Item key={i} icon={icons[i]}>
									<Link to={item.url}>{item.title}</Link>
								</Menu.Item>
							);
						})}
					</Menu>
				</ConfigProvider>
			</div>
			<DropdownComponent isProfile={true} />
		</aside>
	);
};

export default SideBar;
