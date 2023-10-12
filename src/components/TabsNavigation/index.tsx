import React from 'react';
import { ConfigProvider, Tabs } from 'antd';
import { tabsPropsData } from '../../Data/tabsNavigation.data.ts';

const TabsNavigation: React.FC = () => {
	return (
		<ConfigProvider
			theme={{
				components: {
					Tabs: {
						itemColor: 'var(--dark-blue)',
						itemSelectedColor: 'var(--dark-blue)'
					},
				},
			}}
		>
			<Tabs items={tabsPropsData} />
		</ConfigProvider>
	);
}

export default TabsNavigation;
