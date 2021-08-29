import React, { useEffect, useState } from 'react';
import AdminContent from '../../../components/admin/Content/index';

import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DataTable from './../../../components/admin/DataTables/DataTable';

import { connect } from 'react-redux';

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
				// Ticket: localStorage.getItem('ticket'),
				'app-id': '6128d9270b66625795bdb772',
			},
		};

		// Test Fetch data from API
		const fethData = async () => {
			await axios
				.get(
					// 'https://swapi.dev/api/planets/'
					// 'https://dummyapi.io/data/v1/post',
					'https://api.openbrewerydb.org/breweries'
					// params,
					// options
				)
				.then((respond) => {
					// console.log(respond);
					setListDatas(respond.data);
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

	//Test Redux
	const addToPlanet = () => {
		props.addPlanet();
	};

	// MAIN RETURN
	return (
		<AdminContent>
			<DataTable listDatas={listDatas} listColumns={originalColumns} />
			<div className="mt-5 d-flex justify-content-between">
				<Button variant="contained" startIcon={<i className="fa fa-plus"></i>}>
					<Link to="/manage-campaigns/add-campaign">Add New</Link>
				</Button>
			</div>
			<h1>Test Redux</h1>
			<div>
				<h1>Planet: {props.galaxy}</h1>
				<button type="button" className="btn btn-primary" onClick={addToPlanet}>
					Add More Planet
				</button>
			</div>
		</AdminContent>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		galaxy: state.galaxy,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addPlanet: () => {
			dispatch({ type: 'add_planet' });
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCampains);
