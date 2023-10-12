import { NavigateFunction, Route, Routes, useNavigate } from 'react-router-dom';
import MainPage from './Layouts/MainPage';
import Promo from './components/Promo';

import { Col, Layout, Row } from 'antd';
import './App.css';
import { lazy, Suspense, useEffect } from 'react';

function App() {
	const ForeCastPage = lazy(() => import('./Layouts/ForeCastPage'));
	const OfficesPage = lazy(() => import('./Layouts/OfficesPage'));
	const EmployeesPage = lazy(() => import('./Layouts/EmployeesPage'));
	const navigate: NavigateFunction = useNavigate();

	useEffect(() => {
		navigate('/');
	}, []);

	return (
		<div>
			<Row justify="center" align="middle" style={{ height: '100vh' }}>
				<Col>
					<Layout>
						<Suspense fallback={<h2>Loading...</h2>}>
							<Routes>
								<Route path="/" element={<MainPage />}>
									<Route index element={<Promo />} />
									<Route path="forecast" element={<ForeCastPage />} />
									<Route path="offices" element={<OfficesPage />} />
									<Route path="employees" element={<EmployeesPage />} />
								</Route>
							</Routes>
						</Suspense>
					</Layout>
				</Col>
			</Row>
		</div>
	);
}

export default App;
