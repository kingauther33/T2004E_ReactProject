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
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [rows, setRows] = useState([]);
	const listColumns = useRef(props.listColumns);
	// const [searched, setSearched] = useState('');
	let allStartingRows = props.listDatas;
	const thisLocation = useRef(window.location.pathname);
	const classes = useStyles();

	/* 	useEffect(() => {
		setRows(props.listRows);

		return () => {
			setRows([]);
		};
	}, [props.listRows]); */

	useEffect(() => {
		console.log('Hello');
		let renderedItems = [...props.listDatas];
		let newArray;
		/* const handleEdit = (item) => {
			context.editItem(item);
		};

		const handleFilter = (item) => {
			console.log(item);
			const filtered = renderedItems.filter((x) => x.id !== item.id);
			setListData(filtered);
		}; */

		const handleFilter = (e) => {
			console.log('In Delete');
		};

		const handleEdit = (e) => {
			console.log('In Edit');
		};

		if (renderedItems) {
			newArray = renderedItems.map((item) => {
				// Lay Id tu API
				// "https://swapi.dev/api/planets/1/"
				const itemId = item.url.split('/')[5];
				item.action = (
					<div>
						<button
							type="button"
							style={{ border: 'none', color: '#3f51b5' }}
							onClick={handleFilter.bind(null)}
						>
							<i className="fas fa-trash" style={{ fontSize: '16px' }}></i>
						</button>
						<Link to={`${thisLocation.current}/${itemId}`}>
							<button
								style={{
									border: 'none',
									color: 'red',
									marginLeft: '10px',
								}}
								onClick={handleEdit.bind(null)}
							>
								<i className="fas fa-edit" style={{ fontSize: '16px' }}></i>
							</button>
						</Link>
					</div>
				);

				// DESTRUCTURING TỪ ITEM
				return item;
			});
			setRows(newArray);
		}
	}, [props.listDatas]);

	// XU LY SEARCH
	const requestSearch = () => {
		// setSearched(e.target.value);
		const searchInput = document.querySelector('#searchInput');
		console.log(allStartingRows);
		const filteredRows = allStartingRows.filter((row) => {
			return row.name.toLowerCase().includes(searchInput.value.toLowerCase());
		});
		// console.log(filteredRows);
		setRows(filteredRows);
	};

	/* 	const cancelSearch = () => {
		setSearched('');
		requestSearch(searched);
	}; */

	// XU LY PAGINATION
	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	// RENDER COLUMN FUNCTIONS
	const renderedColumns = listColumns.current ? (
		listColumns.current.map((column, index) => (
			<StyledTableCell align={column.align} key={index}>
				{column.name}
			</StyledTableCell>
		))
	) : (
		<></>
	);

	// RENDER ROWS FUNCTIONS
	const renderedRows = rows ? (
		(rowsPerPage > 0
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
				<StyledTableCell align="right">{row.action}</StyledTableCell>
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