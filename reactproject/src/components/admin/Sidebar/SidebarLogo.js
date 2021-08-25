import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../../assets';

// const fakeColumns = [{ name: 'Dashboard' }];

const SidebarLogo = () => {
	return (
		// SidebarSearch Form
		<Link to="#" className="brand-link">
			<img
				src={images.admin.logo}
				alt="AdminLTE Logo"
				className="brand-image img-circle elevation-3"
				style={{ opacity: 0.8 }}
			/>
			<span className="brand-text font-weight-light">AdminLTE 3</span>
		</Link>
	);
};

export default SidebarLogo;
