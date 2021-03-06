import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import LoginLayout from '../layout/LoginLayout';
import AdminRedirect from './../pages/AdminRedirect/index';

// Function bieu thi LAYOUT di voi PAGE cua cac Routes
const routeWrapper = (Layout, Page) => {
	const LayoutSwitcher = (props) => (
		<Layout>
			<Page {...props} />
		</Layout>
	);

	return LayoutSwitcher;
};

/* const routeWrapper = (Layout, HomeP, props) => {
	return (
		<Layout>
			<HomeP {...props} />
		</Layout>
	);
}; */

// Function bieu thi URL ung voi tung Trang Rieng Biet cua cac Routes
const HealthyFoodRoutes = (props) => {
	const { layout, page, path, exact, ...rest } = props;
	if (path.includes('manage') || path.includes('dashboard')) {
		if (!localStorage.getItem('token')) {
			return <Redirect to="/redirect" />;
		}
	}

	return (
		<Route exact={exact} path={path}>
			{routeWrapper(layout, page)(rest)}
		</Route>
	);
};

export default HealthyFoodRoutes;
