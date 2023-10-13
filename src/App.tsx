import { NavigateFunction, Route, Routes, useNavigate } from 'react-router-dom';
import { Col, Layout, Row } from 'antd';
import { useEffect } from 'react';

import EmployeesPage from './Layouts/EmployeesPage';
import ForeCastPage from './Layouts/ForeCastPage';
import OfficesPage from './Layouts/OfficesPage';
import MainPage from './Layouts/MainPage';
import Promo from './components/Promo';

import './App.css';

function App() {
	const navigate: NavigateFunction = useNavigate();

	const routes = [
		{
			path: '/',
			element: <Promo />,
		},
		{
			path: 'forecast',
			element: <ForeCastPage />,
		},
		{
			path: 'offices',
			element: <OfficesPage />,
		},
		{
			path: 'employees',
			element: <EmployeesPage />,
		},
	];

	useEffect(() => {
		navigate('/');
	}, []);

	return (
		<div>
			<Row justify="center" align="middle" style={{ height: '100vh' }}>
				<Col>
					<Layout>
						<Routes>
							<Route path="/" element={<MainPage />}>
								{routes.map((item, i) => {
									return <Route key={i} path={item.path} element={item.element} />;
								})}
							</Route>
						</Routes>
					</Layout>
				</Col>
			</Row>
		</div>
	);
}

export default App;
