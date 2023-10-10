import React, { useState } from 'react';
import {ConfigProvider, Tabs} from 'antd';
import dashboard from './icons/dashboard.svg';
import forecast from './icons/forecast.svg';
import offices from './icons/offices.svg';
import employees from './icons/employees.svg';
import styles from './sidebar.module.css'

const SideBar: React.FC = () => {
	const [active, setActive] = useState('1');
	const onClick = (id: string) => setActive(id)
	return (
		<div className={styles.navigation} >
			<ConfigProvider
				theme={{
					components: {
						Tabs: {
							itemHoverColor: 'black'
						},
					},
				}}
			>
				<Tabs
					tabPosition="right"
					activeKey={active}
					items={[dashboard, forecast, offices, employees].map((url, i) => {
						const id = String(i + 1);
						return {
							label: (
								<span className={styles.itemsWrap} onClick={() => onClick(id)} >
								<img src={url} alt='itemName' className={active==id? styles.active : ''} />
								Tab {id}
							</span>
							),
							key: id,
						};
					})}
				/>
			</ConfigProvider>

		</div>
	);
};

export default SideBar;
