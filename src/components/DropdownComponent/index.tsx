import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import React from 'react';

import { items } from '../../Data/profileDropdown.data.ts';
import profileImage from '../../assets/img/cat.webp';

import styles from './dropdownComponent.module.css';

interface IDropdown {
	isProfile?: boolean;
}

const DropdownComponent: React.FC<IDropdown> = ({ isProfile }) => {
	return (
		<>
			{isProfile ? (
				<div className={styles.wrap}>
					<div className={styles.profileImage}>
						<img className={styles.img} src={profileImage} alt="profile" />
					</div>
					<Dropdown menu={{ items }} trigger={['click']}>
						<Space className={styles.dropDown}>
							<div>My profile</div>
							<DownOutlined />
						</Space>
					</Dropdown>
				</div>
			) : (
				<select className={styles.select}>
					<option>People</option>
					<option>Adults</option>
					<option>Children</option>
				</select>
			)}
		</>
	);
};

export default DropdownComponent;
