import React, { useEffect, useState, useRef } from 'react';
import CustomTablePagination from './CustomTablePagination';
import styles from './DataTable.module.css';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
	Box,
	Paper,
	TableRow,
	TableHead,
	TableContainer,
	TableCell,
	TableBody,
	Table,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import images from '../../../assets';
import { API } from '../../../API';
import axios from 'axios';

// STYLE CHO TABLE
const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
});

// =================================================================
// MAIN FUNCTION
const DataTable = (props) => {
	// CAC STATE TRONG FUNCTIONS
	// const [page, setPage] = React.useState(0);
	let page = props.page;
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [rows, setRows] = useState(props.rows);
	const columns = useRef(props.columns);
	let allStartingRows = props.rows;
	const classes = useStyles();

	useEffect(() => {
		setRows(props.rows);
		debugger;
	}, [props.rows]);

	// XU LY SEARCH
	const requestSearch = () => {
		const searchInput = document.querySelector('#searchInput');
		// console.log(allStartingRows);
		const filteredRows = allStartingRows.filter((row) => {
			return 'title' in row
				? row.title.toLowerCase().includes(searchInput.value.toLowerCase())
				: row.name.toLowerCase().includes(searchInput.value.toLowerCase());
		});
		setRows(filteredRows);
		props.setPage(0);
	};

	// XU LY PAGINATION
	const handleChangePage = (event, newPage) => {
		props.setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		props.setPage(0);
	};

	// RENDER COLUMN FUNCTIONS
	// VERSION dung fix cung'
	const renderedColumns = columns.current ? (
		columns.current.map((column, index) => (
			<StyledTableCell align={column.align} key={index}>
				{column.name}
			</StyledTableCell>
		))
	) : (
		<></>
	);

	const checkRenderdRow = (row, key) => {
		let value;
		if (key === 'content') {
			value = parse(row[key]);
		} else if (key === 'startDate' || key === 'endDate') {
			value = row[key].split('T')[0];
		} else if (row[key] === null) {
			value = (
				<img
					src={images.admin[`prod${row.id}`]}
					alt={`Prod${key}`}
					style={{ width: '75px' }}
				/>
			);
		} else if (key === 'image') {
			value = (
				<img
					src={images.admin[row.image.split('.')[0]]}
					alt={row.name}
					style={{ width: '75px' }}
				/>
			);
		} else if (key === 'category') {
			if (row[key].length > 0) {
				value = row[key][0].name;
			}
			// value = row[key]
			// value = row[key].name;
		} else {
			value = row[key];
		}

		return value;
	};

	// RENDER ROWS FUNCTIONS
	const renderedRows = rows ? (
		(rowsPerPage > 0
			? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
			: rows
		).map((row, index) => (
			<StyledTableRow key={index * Math.random()}>
				<StyledTableCell component="th" scope="row">
					{index + 1}
				</StyledTableCell>
				{Object.keys(row)
					.filter((key) => key !== 'id' && key !== 'categoryId')
					.map((key, index) =>
						key !== 'campaignComments' ? (
							<StyledTableCell
								key={index}
								align="left"
								className={
									key === 'content' ? styles['over__text'] : styles['over__textNormal']
								}
								// className={styles['over__text']}
							>
								{/* {key === 'content' ? parse(row[key]) : row[key]} */}
								{checkRenderdRow(row, key)}
								{/* {console.log(row)} */}
							</StyledTableCell>
						) : (
							''
						)
					)}
				{/* <StyledTableCell align="right">{row.name}</StyledTableCell>
				<StyledTableCell align="right">{row.diameter}</StyledTableCell>
				<StyledTableCell align="right">{row.terrain}</StyledTableCell>
				<StyledTableCell align="right">{row.population}</StyledTableCell> */}
				{/* <StyledTableCell align="center">{row.action}</StyledTableCell> */}
			</StyledTableRow>
		))
	) : (
		<></>
	);

	return (
		<Box>
			<div className={styles['box-wrapper']}>
				<div className={`${styles['searchbox']}`}>
					<i className={`fas fa-search ${styles['searchbox__icon']}`}></i>
					<input
						id="searchInput"
						className={`${styles['searchbox__input']}`}
						// value={searched}
						// onChange={requestSearch}
						// onCancel={cancelSearch}
						placeholder="Enter Name"
						onKeyPress={(event) => {
							if (event.key === 'Enter') {
								requestSearch();
							}
						}}
						// onChange={requestSearch}
					/>
					<button
						type="button"
						className={`btn btn-primary ${styles['searchbox__button']}`}
						onClick={requestSearch}
					>
						Search
					</button>
				</div>
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label="customized table">
						<TableHead>
							<TableRow>
								{/* <StyledTableCell>Dessert (100g serving)</StyledTableCell>
							<StyledTableCell align="right">Name</StyledTableCell>
							<StyledTableCell align="right">Diameter (cm)</StyledTableCell>
							<StyledTableCell align="right">Terrain</StyledTableCell>
							<StyledTableCell align="right">Population</StyledTableCell> */}
								{renderedColumns}
							</TableRow>
						</TableHead>
						<TableBody>
							{/* {(rowsPerPage > 0
							? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							: rows
						).map((row, index) => (
							<StyledTableRow key={index * Math.random()}>
								<StyledTableCell component="th" scope="row">
									{row.name}
								</StyledTableCell>
								<StyledTableCell align="right">{row.name}</StyledTableCell>
								<StyledTableCell align="right">{row.diameter}</StyledTableCell>
								<StyledTableCell align="right">{row.terrain}</StyledTableCell>
								<StyledTableCell align="right">{row.population}</StyledTableCell>
							</StyledTableRow>
						))} */}
							{renderedRows}
						</TableBody>
					</Table>
				</TableContainer>
				<CustomTablePagination
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					handleChangePage={handleChangePage}
					handleChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</div>
		</Box>
	);
};

export default DataTable;
