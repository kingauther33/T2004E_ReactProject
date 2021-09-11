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
	{ name: 'Image', align: 'left' },
	{ name: 'Description', align: 'left' },
	{ name: 'Prep Time', align: 'left' },
	{ name: 'Cook Time', align: 'left' },
	{ name: 'Ingredients', align: 'left' },
	{ name: 'Tools', align: 'left' },
	{ name: 'Category', align: 'left' },
	{ name: 'Actions', align: 'left' },
];

// Main FUNCTION
const ManageRecipes = (props) => {
	const [listDatas, setListDatas] = useState([]);
	const [loading, setLoading] = useState(false);
	const [rows, setRows] = useState([]);
	const [page, setPage] = useState(0);
	const [categories, setCategories] = useState([]);
	const context = useContext(DataContext);
	const thisLocation = useRef(window.location.pathname);
	const [notification, setNotification] = useState({
		message: '',
		isSuccess: true,
		isOpen: false,
	});

	// XU LY FETCH DATA TU API
	const handleFetchRecipe = () => {
		const fetchData = async () => {
			await axios
				.get(API.recipes.url)
				.then((respond) => {
					setListDatas(respond.data);
					debugger;
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

	const handleFetchCategory = () => {
		const fetchCategory = async () => {
			await axios
				.get(API.categories.url, {
					headers: {
						'Content-Type': 'application/json',
						'Access-Control-Allow-Origin': '*',
					},
				})
				.then((response) => {
					setCategories(response.data);
					debugger;
				})
				.catch((err) => {
					console.log(err);
				});
		};

		fetchCategory();
	};

	// FUNCTION kha giong ComponentDidMount
	useEffect(() => {
		handleFetchRecipe();
		handleFetchCategory();
	}, [context]);

	// FUNCTION CHAY DE TRA VE NHUNG HANG MOI KHI DATA THAY DOI
	useEffect(() => {
		let renderedItems = [...listDatas];
		let rowArray;

		const handleFilter = (item, event) => {
			event.preventDefault();
			const fetchData = async () => {
				await axios
					.delete(API.delete_recipe.url + item.id)
					.then((respond) => {
						handleFetchRecipe();
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
		debugger;

		const handleEdit = (item) => {
			context.editItem(item);
		};

		if (renderedItems) {
			rowArray = renderedItems.map((item) => {
				item.action = (
					<div>
						<button
							type="button"
							style={{ border: 'none', color: '#3f51b5' }}
							onClick={handleFilter.bind(this, item)}
						>
							<i className="fas fa-trash" style={{ fontSize: '16px' }}></i>
						</button>
						<Link to={`${thisLocation.current}/${item.categoryId}`}>
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

				// let category = categories.filter((c) => c.id === item.categoryId);
				item.category = categories.filter((c) => c.id === item.categoryId);
				debugger;

				let {
					id,
					title,
					image,
					description,
					prepTime,
					cookTime,
					ingredients,
					tools,
					action,
					category,
				} = item;

				return {
					id,
					title,
					image,
					description,
					prepTime,
					cookTime,
					ingredients,
					tools,
					category,
					action,
					// categories[],
				};
			});
			setRows(rowArray);
		}
	}, [listDatas, context, categories]);

	// MAIN RETURN
	return (
		<AdminContent>
			<LoadingEffect loading={loading} />
			<DataTable rows={rows} columns={columns} page={page} setPage={setPage} />
			<div className="mt-5 d-flex justify-content-between">
				<Button variant="contained" startIcon={<i className="fa fa-plus"></i>}>
					<Link to="/manage-recipes/add-recipe">Add New</Link>
				</Button>
			</div>
			<SnackbarPopup notification={notification} setNotification={setNotification} />
		</AdminContent>
	);
};

export default ManageRecipes;
