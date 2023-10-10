import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'Dallas Office',
    },
    {
        key: '2',
        label: 'Coppell Office',
    },
    {
        key: '3',
        label: 'Los Angeles Office',
    },
];

const TabsNavigation: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default TabsNavigation;
