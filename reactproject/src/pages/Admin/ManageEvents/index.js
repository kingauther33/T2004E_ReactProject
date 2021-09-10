import React, { useEffect, useState, useContext, useRef } from 'react';
import AdminContent from '../../../components/admin/Content/index';

import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DataTable from './../../../components/admin/DataTables/DataTable';

// API
import { API } from '../../../API';
import LoadingEffect from '../../../components/admin/LoadingEffect';

// DATA CONTEXT
import DataContext from '../../../store/PassData-context';
import SnackbarPopup from '../../../components/admin/SnackbarPopup';

const columns = [
	{ name: 'ID', align: 'left' },
	{ name: 'Title', align: 'left' },
	{ name: 'Description', align: 'left' },
	{ name: 'Image', align: 'left' },
	{ name: 'Organizer', align: 'left' },
	{ name: 'Location', align: 'left' },
	{ name: 'Start Date', align: 'left' },
	{ name: 'End Date', align: 'left' },
	{ name: 'Actions', align: 'left' },
];

// Main FUNCTION
const ManageEvents = (props) => {
	const [listDatas, setListDatas] = useState([]);
	const [loading, setLoading] = useState(false);
	const [rows, setRows] = useState([]);
	const [page, setPage] = useState(0);
	const context = useContext(DataContext);
	const thisLocation = useRef(window.location.pathname);
	const [notification, setNotification] = useState({
		message: '',
		isSuccess: true,
		isOpen: false,
	});

	// XU LY FETCH DATA TU API
	const handleFetchEvent = () => {
		const fetchData = async () => {
			await axios
				.get(API.events.url)
				.then((respond) => {
					setListDatas(respond.data);
				})
				.catch((err) => {
					console.log(err);
				});
		};

		// LOADING + FETCH DATA
		setLoading(true);
		fetchData();
		setLoading(false);
	};

	// FUNCTION kha giong ComponentDidMount
	useEffect(() => {
		handleFetchEvent();
	}, [context]);

	// FUNCTION CHAY DE TRA VE NHUNG HANG MOI KHI DATA THAY DOI
	useEffect(() => {
		let renderedItems = [...listDatas];
		let rowArray;

		const handleFilter = (item, event) => {
			event.preventDefault();
			const fetchData = async () => {
				await axios
					.delete(API.delete_event.url + item.id)
					.then((respond) => {
						handleFetchEvent();
						setNotification({
							message: 'Delete successfully!',
							isOpen: true,
							isSuccess: true,
						});
					})
					.catch((err) => {
						setNotification({
							message: 'Failed to delete event!',
							isOpen: true,
							isSuccess: false,
						});
					});
			};

			fetchData();
		};

		const handleEdit = (item) => {
			context.editItem(item);
		};

		if (renderedItems) {
			rowArray = renderedItems.map((item) => {
				const itemId = item.id;
				item.action = (
					<div>
						<button
							type="button"
							style={{ border: 'none', color: '#3f51b5' }}
							onClick={handleFilter.bind(this, item)}
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
								onClick={handleEdit.bind(this, item)}
							>
								<i className="fas fa-edit" style={{ fontSize: '16px' }}></i>
							</button>
						</Link>
					</div>
				);

				let {
					id,
					title,
					description,
					image,
					organizer,
					location,
					startDate,
					endDate,
					action,
				} = item;
				return {
					id,
					title,
					description,
					image,
					organizer,
					location,
					startDate,
					endDate,
					action,
				};
			});
			setRows(rowArray);
		}
	}, [listDatas, context]);

	// MAIN RETURN
	return (
		<AdminContent>
			<LoadingEffect loading={loading} />
			<DataTable rows={rows} columns={columns} page={page} setPage={setPage} />
			<div className="mt-5 d-flex justify-content-between">
				<Button variant="contained" startIcon={<i className="fa fa-plus"></i>}>
					<Link to="/manage-events/add-event">Add New</Link>
				</Button>
			</div>
			<SnackbarPopup notification={notification} setNotification={setNotification} />
		</AdminContent>
	);
};

export default ManageEvents;
