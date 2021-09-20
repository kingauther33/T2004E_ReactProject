import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import HealthyFoodRoutes from './routes';
import { routes } from './routes/routes';
import Error404 from './pages/Error404';
import AdminSelectedMenuProvider from './store/AdminSelectedMenu';
import Campaigns from './pages/User/Campaigns';
import ContactUs from './pages/User/ContactUs';
import AboutUs from './pages/User/AboutUs';
import Recipes from './pages/User/Recipes';
import Events from './pages/User/Events';
import { DataContextProvider } from './store/PassData-context';
import RecipesDetail from "./pages/User/Recipes/recipesDetail";

function App() {
	return (
		// DATA CONTEXT
		<DataContextProvider>
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
						<Route path="/about-us" component={AboutUs} />
						<Route path="/campaigns" component={Campaigns} />
						<Route path="/contact-us" component={ContactUs} />
						<Route path="/events" component={Events} />
						<Route path="/recipes" component={Recipes} />
						<Route path="/recipesDetail" component={RecipesDetail} />

						{/* Làm Page Lỗi */}
						<Route path="/404">
							<Error404 />
						</Route>
						<Redirect from="*" to="/404" />
					</Switch>
				</BrowserRouter>
			</AdminSelectedMenuProvider>
		</DataContextProvider>
	);
}

export default App;
