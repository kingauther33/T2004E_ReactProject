import React from 'react';
import ContentHeader from './ContentHeader';

const AdminContent = (props) => {
	return (
		<div className="content-wrapper">
			<ContentHeader />
			<section className="content" style={{ minHeight: '400px' }}>
				<div className="container-fluid">{props.children}</div>
			</section>
		</div>
	);
};

export default AdminContent;
