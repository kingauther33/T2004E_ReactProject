import React, { useEffect, useState, useContext } from 'react';
import { Form, Formik, Field, FieldArray, ErrorMessage } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import * as Yup from 'yup';
import { Typography, Box, Card, CardContent } from '@material-ui/core';
import { withRouter, useParams } from 'react-router-dom';
import axios from 'axios';
import { API } from './../../../API/index';

// CUSTOM COMPONENT
import AdminContent from '../../../components/admin/Content';
import TextInput from './../../../components/admin/Forms/TextInput';
import ImageInput from '../../../components/admin/Forms/ImageInput';
import CKEditorInput from '../../../components/admin/Forms/CKEditorInput';
import DateInput from './../../../components/admin/Forms/DateInput';
import SnackbarPopup from '../../../components/admin/SnackbarPopup';
import DataContext from './../../../store/PassData-context';

// CK EDITOR + HTML PARSER + DATETIME PICKER
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import SelectInput from './../../../components/admin/Forms/SelectInput';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

const ModifyRecipe = (props) => {
	const [data, setData] = useState([]);
	const { id } = useParams();
	const context = useContext(DataContext);
	const [listCategories, setListCategories] = useState([]);
	console.log(context);

	const [notification, setNotification] = useState({
		message: '',
		isSuccess: true,
		isOpen: false,
	});

	const fetchCategory = async () => {
		await axios
			.get(API.categories.url, {
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
				},
			})
			.then((response) => {
				setListCategories(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		fetchCategory();
	}, []);

	const initialValues = {
		id: context.item.id,
		title: context.item.title,
		image: context.item.image,
		description: context.item.description,
		prepTime: context.item.prepTime,
		cookTime: context.item.cookTime,
		ingredients: context.item.ingredients,
		tools: context.item.tools,
		categoryId: context.item.categoryId,
	};

	// VALIDATION FORM
	const validationSchema = Yup.object().shape({
		id: Yup.number(),
		title: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required!'),
		image: Yup.mixed().required('You need to provide image!'),
		description: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required!'),
		prepTime: Yup.number()
			.test('maxDigits', 'Prep Time must be greater than 3', (number) => number >= 3)
			.required('Required!'), // CKEDITOR
		cookTime: Yup.number()
			.test('maxDigits', 'Prep Time must be greater than 2', (number) => number >= 2)
			.required('Required!'),
		ingredients: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required!'),
		tools: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required!'),
		categoryId: Yup.mixed().required('Required!'),
	});

	// FUNCTION kha giong ComponentDidMount
	useEffect(() => {
		// Test Fetch data from API

		// CLean up Redundant
		return () => {
			setData([]);
		};
	}, []);

	const handleSubmit = async (values) => {
		const json = JSON.stringify(values);

		// PUT FUNCTION
		await axios
			.put(
				API.edit_recipe.url + context.item.id,
				// formData,
				json,
				{
					headers: {
						'Content-Type': 'application/json',
						'Access-Control-Allow-Origin': '*',
					},
				}
			)
			.then((response) => {
				setNotification({
					message: 'Successfully edit event!',
					isOpen: true,
					isSuccess: true,
				});
				console.log(response);
			})
			.catch((err) => {
				setNotification({
					message: 'Failed to edit event!',
					isOpen: true,
					isSuccess: false,
				});
				console.log(err);
			});
	};

	return (
		<AdminContent>
			<Typography variant="h4">Editing {context.item.title}</Typography>
			<Box m={4}>
				<Card>
					<CardContent className="m-2">
						<Formik
							initialValues={initialValues}
							onSubmit={handleSubmit}
							validationSchema={validationSchema}
						>
							{({ values, errors, touched, handleBlur, setFieldValue, isSubmitting }) => (
								<Form autoComplete="off">
									<div className="row align-items-center">
										{/* TITLE */}
										<TextInput
											title="Title"
											type="text"
											fullWidth={true}
											name="title"
											values={values.title}
											errors={errors.title}
											touched={touched.title}
										/>
										{/* IMAGE */}
										<ImageInput
											title="Image"
											name="image"
											type="file"
											fullWidth={false}
											values={values.image}
											errors={errors.image}
											touched={touched.image}
											setFieldValue={setFieldValue}
										/>
										{/* DESCRIPTION */}
										<TextInput
											title="Description"
											type="text"
											fullWidth={true}
											name="description"
											values={values.description}
											errors={errors.description}
											touched={touched.description}
										/>
										{/* PREP TIME */}
										<TextInput
											title="Prep Time"
											type="number"
											fullWidth={false}
											name="prepTime"
											values={values.prepTime}
											errors={errors.prepTime}
											touched={touched.prepTime}
										/>
										{/* COOK TIME */}
										<TextInput
											title="Cook Time"
											type="number"
											fullWidth={false}
											name="cookTime"
											values={values.cookTime}
											errors={errors.cookTime}
											touched={touched.cookTime}
										/>
										{/* INGREDIENTS */}
										<TextInput
											title="Ingredients"
											type="text"
											fullWidth={true}
											name="ingredients"
											values={values.ingredients}
											errors={errors.ingredients}
											touched={touched.ingredients}
										/>

										{/* TOOLS */}
										<TextInput
											title="Tools"
											type="text"
											fullWidth={true}
											name="tools"
											values={values.tools}
											errors={errors.tools}
											touched={touched.tools}
										/>

										{/* CATEGORIES */}
										<SelectInput
											title="Categories"
											name="categoryId"
											values={values.categoryId}
											errors={errors.categoryId}
											touched={touched.categoryId}
											listForeignDatas={listCategories}
										/>

										{/* END INPUT */}
									</div>
									<button type="submit" className="btn btn-danger mt-4">
										Submit
									</button>
									<pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
								</Form>
							)}
						</Formik>
					</CardContent>
					<SnackbarPopup notification={notification} setNotification={setNotification} />
				</Card>
			</Box>
		</AdminContent>
	);
};

export default withRouter(ModifyRecipe);
