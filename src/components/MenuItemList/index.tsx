import React from 'react';
import { navigationItems } from '../../Data/leftSideBar.data.ts';

import { AppstoreFilled, BankOutlined, RiseOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const MenuItemList: React.FC = () => {
	const icons: JSX.Element[] = [
		<AppstoreFilled />,
		<RiseOutlined />,
		<BankOutlined />,
		<UsergroupAddOutlined />,
	];

	return (
		<Menu defaultSelectedKeys={['0']}>
			{navigationItems.map((item, i) => {
				return (
					<Menu.Item key={i} icon={icons[i]}>
						<Link to={item.url}>{item.title}</Link>
					</Menu.Item>
				);
			})}
		</Menu>
	);
};

export default MenuItemList;
