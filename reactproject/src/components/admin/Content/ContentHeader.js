import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AdminSelectedMenuContext } from '../../../store/AdminSelectedMenu';

const ContentHeader = () => {
	const { selectedMenu } = useContext(AdminSelectedMenuContext);
	const thisLocation = useRef(window.location.pathname);
	// console.log(thisLocation);

	return (
		<section className="content-header">
			<div className="container-fluid">
				<div className="row mb-2">
					<div className="col-sm-6">
						<h1>{selectedMenu}</h1>
					</div>
					<div className="col-sm-6">
						<ol className="breadcrumb float-sm-right">
							<li className="breadcrumb-item">
								<Link to="/admin-dashboard">Home</Link>
							</li>
							<li className="breadcrumb-item active">
								<Link to={`/${thisLocation.current.split('/')[1]}`}>{selectedMenu}</Link>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContentHeader;
