import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AdminSelectedMenuContext } from '../../../store/AdminSelectedMenu';

const fakeColumns = [
	{ id: 0, name: 'Dashboard', icon: 'fas fa-th nav-icon', link: 'admin-dashboard' },
	{
		id: 1,
		name: 'Manage Campaigns',
		icon: 'far fa-circle nav-icon',
		link: 'manage-campaigns',
	},
	{
		id: 2,
		name: 'Manage Events',
		icon: 'nav-icon fas fa-chart-pie',
		link: 'manage-events',
	},
	{
		id: 3,
		name: 'Manage Recipes',
		icon: 'nav-icon fas fa-chart-pie',
		link: 'manage-recipes',
	},
];

const SidebarMenu = () => {
	const { getSelectedMenu } = useContext(AdminSelectedMenuContext);

	const handleSelectedMenu = (e) => {
		getSelectedMenu(e.target.textContent);
	};

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
						<Link to={column.link} className="nav-link" onClick={handleSelectedMenu}>
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
