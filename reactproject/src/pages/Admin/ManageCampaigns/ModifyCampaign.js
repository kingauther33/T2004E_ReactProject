import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	FormControl,
	Typography,
	InputLabel,
	Input,
	FormHelperText,
} from '@material-ui/core';
import { withRouter, useParams } from 'react-router-dom';
import AdminContent from '../../../components/admin/Content';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

const ModifyCampaign = (props) => {
	const [data, setData] = useState([]);
	const { id } = useParams();

	const classes = useStyles();

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
					// 'https://swapi.dev/api/planets/' + id
					'https://api.openbrewerydb.org/breweries/' + id
					// params,
					// options
				)
				.then((respond) => {
					console.log(respond.data);
					setData(respond.data);
				})
				.catch((err) => {
					console.log(err);
				});
		};
		fethData();

		// CLean up Redundant
		return () => {
			setData([]);
		};
	}, []);

	return (
		<AdminContent>
			<Typography variant="h4">Editing {data.name}</Typography>
			<div className="container mt-5">
				<form noValidate autoComplete="off">
					<div className="form-group row">
						<label htmlFor="staticEmail" className="col-sm-2 col-form-label">
							ID
						</label>
						<div className="col-sm-10">
							<input
								type="text"
								readOnly
								className="form-control-plaintext"
								id="staticEmail"
								value={id}
							/>
						</div>
					</div>
					<div className="form-group row">
						<label htmlFor="inputPassword" className="col-sm-2 col-form-label">
							Password
						</label>
						<div className="col-sm-10">
							<input
								type="password"
								className="form-control"
								id="inputPassword"
								placeholder="Password"
							/>
						</div>
					</div>
				</form>
			</div>
		</AdminContent>
	);
};

export default withRouter(ModifyCampaign);
