import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import HealthyFoodRoutes from './routes';
import { routes } from './routes/routes';
import Error404 from './pages/Error404';
import AdminSelectedMenuProvider from './store/AdminSelectedMenu';

function App() {
	return (
		<AdminSelectedMenuProvider>
			<BrowserRouter>
				<Switch>
					{routes.map((route, index) => (
						<HealthyFoodRoutes
							key={index}
							path={route.path}
							page={route.page}
							layout={route.layout}
							exact
						/>
					))}

					{/* Lam page lỗi */}
					<Route path="/404">
						<Error404 />
					</Route>
					<Redirect from="*" to="/404" />
				</Switch>
			</BrowserRouter>
		</AdminSelectedMenuProvider>
	);
}

export default App;
