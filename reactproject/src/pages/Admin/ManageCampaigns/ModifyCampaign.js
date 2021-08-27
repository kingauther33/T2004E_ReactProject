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
					'https://swapi.dev/api/planets/' + id
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
					<div class="form-group row">
						<label for="staticEmail" class="col-sm-2 col-form-label">
							Email
						</label>
						<div class="col-sm-10">
							<input
								type="text"
								readonly
								class="form-control-plaintext"
								id="staticEmail"
								value="email@example.com"
							/>
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword" class="col-sm-2 col-form-label">
							Password
						</label>
						<div class="col-sm-10">
							<input
								type="password"
								class="form-control"
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
