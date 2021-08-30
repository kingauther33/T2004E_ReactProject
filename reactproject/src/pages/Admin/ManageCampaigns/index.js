import React, { useEffect, useState } from 'react';
import AdminContent from '../../../components/admin/Content/index';

import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DataTable from './../../../components/admin/DataTables/DataTable';

import { connect } from 'react-redux';

// API
import { API } from '../../../API';
import LoadingEffect from '../../../components/admin/LoadingEffect';

const originalColumns = [
	{ name: 'ID', align: 'left' },
	{ name: 'Title', align: 'left' },
	{ name: 'Description', align: 'left' },
	{ name: 'Image', align: 'left' },
	{ name: 'Content', align: 'left' },
	{ name: 'TotalDonation', align: 'left' },
	{ name: 'Sponsor', align: 'left' },
	{ name: 'Start Date', align: 'left' },
	{ name: 'End Date', align: 'left' },
	{ name: 'Actions', align: 'left' },
];

// Main FUNCTION
const ManageCampains = (props) => {
	const [listDatas, setListDatas] = useState([]);
	const [loading, setLoading] = useState(false);

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
		/* const fethData = async () => {
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
		}; */

		const fethData = async () => {
			await axios
				/* .get(
					// 'https://swapi.dev/api/planets/'
					// 'https://dummyapi.io/data/v1/post',
					'https://localhost:44313/api/Campaigns'
					// params,
					// options
				) */
				.get(API.campaigns.url)
				.then((respond) => {
					console.log(respond);
					setListDatas(respond.data);
				})
				.catch((err) => {
					console.log(err);
				});
		};

		// LOADING + FETCH DATA
		setLoading(true);
		fethData();
		setLoading(false);

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
			<LoadingEffect loading={loading} />
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
