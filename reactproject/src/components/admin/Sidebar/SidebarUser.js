import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../../assets';

const SidebarUser = () => {
	return (
		<div className="user-panel mt-3 pb-3 mb-3 d-flex">
			<div className="image">
				<img
					src={images.admin.user_admin}
					className="img-circle elevation-2"
					alt="User"
				/>
			</div>
			<div className="info">
				<Link to="#" className="d-block">
					Alexander Pierce
				</Link>
			</div>
		</div>
	);
};

export default SidebarUser;
