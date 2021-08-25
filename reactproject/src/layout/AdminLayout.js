import React from 'react';
// import AdminContent from '../components/admin/Content/index';
import AdminFooter from '../components/admin/Footer';
import AdminSidebar from '../components/admin/Sidebar/index';

const AdminLayout = (props) => {
	return (
		<div className="wrapper" style={{ backgroundColor: '#f4f6f9' }}>
			<AdminSidebar />
			{props.children}
			{/* <AdminContent /> */}
			<AdminFooter />
		</div>
	);
};

export default AdminLayout;
