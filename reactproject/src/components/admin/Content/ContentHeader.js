import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AdminSelectedColumnContext } from '../../../store/AdminSelectedColumn';

const ContentHeader = () => {
	const { selectedColumn } = useContext(AdminSelectedColumnContext);

	return (
		<section className="content-header">
			<div className="container-fluid">
				<div className="row mb-2">
					<div className="col-sm-6">
						<h1>{selectedColumn}</h1>
					</div>
					<div className="col-sm-6">
						<ol className="breadcrumb float-sm-right">
							<li className="breadcrumb-item">
								<Link to="/admin-dashboard">Home</Link>
							</li>
							<li className="breadcrumb-item active">{selectedColumn}</li>
						</ol>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContentHeader;
