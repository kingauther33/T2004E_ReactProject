import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AdminSelectedMenuContext } from '../../../store/AdminSelectedMenu';

const fakeColumns = [
	{ id: 0, name: 'Dashboard', icon: 'fas fa-th nav-icon', link: '/admin-dashboard' },
	{
		id: 1,
		name: 'Manage Campaigns',
		icon: 'far fa-circle nav-icon',
		link: '/manage-campaigns',
	},
	{
		id: 2,
		name: 'Manage Events',
		icon: 'nav-icon fas fa-chart-pie',
		link: '/manage-events',
	},
	{
		id: 3,
		name: 'Manage Recipes',
		icon: 'nav-icon fas fa-chart-pie',
		link: '/manage-recipes',
	},
	{
		id: 4,
		name: 'Manage Categories',
		icon: 'nav-icon fas fa-chart-pie',
		link: '/manage-categories',
	},
];

const SidebarMenu = () => {
	const { getSelectedMenu } = useContext(AdminSelectedMenuContext);

	const getName = (path) => {
		let name = '';
		if (path === 'admin-dashboard') {
			name = 'Admin Dashboard';
		}
		if (path === 'manage-campaigns') {
			name = 'Manage Campaigns';
		}
		if (path === 'manage-events') {
			name = 'Manage Events';
		}
		if (path === 'manage-recipes') {
			name = 'Manage Recipes';
		}

		if (path === 'manage-categories') {
			name = 'Manage Categories';
		}
		return name;
	};

	useEffect(() => {
		let pathName = window.location.pathname.split('/')[1];

		getSelectedMenu(getName(pathName));
	});

	/* const handleSelectedMenu = (e) => {
		getSelectedMenu(e.target.textContent);
	}; */

	return (
		// SidebarSearch Form
		<nav className="mt-2">
			<ul
				className="nav nav-pills nav-sidebar flex-column"
				data-widget="treeview"
				role="menu"
				data-accordion="false"
			>
				{fakeColumns.map((column) => (
					<li className="nav-item" key={column.id}>
						<Link
							to={column.link}
							className="nav-link"
							// onClick={handleSelectedMenu}
						>
							<i
								className={`${column.icon} me-2`}
								style={{ color: '#c2c7d0', fontSize: '20px' }}
							></i>
							<p className="text-light" style={{ fontSize: '16px' }}>
								{column.name}
								{/* <span className="right badge badge-danger">New</span> */}
							</p>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default SidebarMenu;
