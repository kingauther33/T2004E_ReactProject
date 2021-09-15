import React from 'react';
import { Link } from 'react-router-dom';

const AdminRedirect = () => {
	return (
		<div className="text-center">
			<h1>Please Login to continue</h1>
			<Link to="/login-callback">Login</Link> | <Link to="/">Home</Link>
		</div>
	);
};

export default AdminRedirect;
