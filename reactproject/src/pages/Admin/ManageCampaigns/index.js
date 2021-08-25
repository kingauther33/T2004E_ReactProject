import React, { useEffect, useState } from 'react';
import AdminContent from '../../../components/admin/Content/index';

import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DataTable from './../../../components/admin/DataTables/DataTable';

const originalColumns = [
	{ name: 'Dessert', align: 'left' },
	{ name: 'Name', align: 'right' },
	{ name: 'Diameter (cm)', align: 'right' },
	{ name: 'Terrain', align: 'right' },
	{ name: 'Population', align: 'right' },
	{ name: 'Actions', align: 'center' },
];

// Main FUNCTION
const ManageCampains = (props) => {
	const [listDatas, setListDatas] = useState([]);

	// FUNCTION kha giong ComponentDidMount
	useEffect(() => {
		// set Data
		// set params dang form data
		const params = {
			keyword: '',
			pageNumber: 1,
			pageSize: 25,
		};
		const options = {
			headers: {
				Ticket: localStorage.getItem('ticket'),
			},
		};

		// Test Fetch data from API
		const fethData = async () => {
			await axios
				.get(
					'https://swapi.dev/api/planets/'
					// params,
					// options
				)
				.then((respond) => {
					// console.log(respond.data.results);
					setListDatas(respond.data.results);
				})
				.catch((err) => {
					console.log(err);
				});
		};
		fethData();

		// CLean up Redundant
		return () => {
			setListDatas([]);
		};
	}, []);

	// MAIN RETURN
	return (
		<AdminContent>
			<DataTable listDatas={listDatas} listColumns={originalColumns} />
			<div className="mt-5 d-flex justify-content-between">
				<Button variant="contained" startIcon={<i className="fa fa-plus"></i>}>
					<Link to="#">Add New</Link>
				</Button>
			</div>
		</AdminContent>
	);
};

export default ManageCampains;
