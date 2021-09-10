import React, { useEffect, useState, useContext } from 'react';
import { Form, Formik, Field, FieldArray, ErrorMessage } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import * as Yup from 'yup';
import {
	FormControl,
	Typography,
	InputLabel,
	Input,
	FormHelperText,
	Box,
	FilledInput,
	OutlinedInput,
	TextField,
	Card,
	CardContent,
	Button,
	Grid,
	Snackbar,
} from '@material-ui/core';
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
	const context = useContext(DataContext);

	const [notification, setNotification] = useState({
		message: '',
		isSuccess: true,
		isOpen: false,
	});

	const initialValues = {
		id: context.item.id,
		title: context.item.title,
		description: context.item.description,
		image: context.item.image,
		content: context.item.content, // CKEDITOR
		organizer: context.item.organizer,
		location: context.item.location,
		startDate: context.item.startDate,
		endDate: context.item.endDate,
	};

	// VALIDATION FORM
	const validationSchema = Yup.object().shape({
		id: Yup.number(),
		title: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required!'),
		description: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required!'),
		image: Yup.mixed().required('You need to provide image!'),
		/* 	.test('fileSize', 'The file is too large', (value) => {
				return value && value[0].size <= 2000000;
			}) */
		content: Yup.string()
			.min('15', 'Too Short!')
			.max('1000', 'Too Long!')
			.required('Required!'), // CKEDITOR
		organizer: Yup.string()
			.min('15', 'Too Short!')
			.max('1000', 'Too Long!')
			.required('Required!'),
		location: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required!'),
		startDate: Yup.date().min(
			new Date('2021-01-01'),
			'Start Date must be after 01/01/2021'
		),
		endDate: Yup.date()
			.min(new Date(), `End Date must be after ${new Date().toLocaleDateString()}`)
			.required('Required!'),
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
				API.edit_event.url + context.item.id,
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
							/* onSubmit={(values) => {
								setTimeout(() => {
									alert(JSON.stringify(values, null, 2));
								}, 500);
							}} */
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

										{/* UPLOAD DEMO

											<div className="col-3">
											<button
												type="button"
												className="btn btn-primary"
												onClick={fileUploadHandler}
											>
												Upload File
											</button> */}
										{/* CONTENT */}
										<CKEditorInput
											title="Content"
											name="content"
											// type="none"
											fullWidth={false}
											values={values.content}
											errors={errors.content}
											touched={touched.content}
											setFieldValue={setFieldValue}
										/>
										{/* ORGANIZER */}
										<TextInput
											title="Organizer"
											type="text"
											fullWidth={true}
											name="organizer"
											values={values.organizer}
											errors={errors.organizer}
											touched={touched.organizer}
										/>
										{/* lOCATION */}
										<TextInput
											title="Location"
											type="text"
											fullWidth={true}
											name="location"
											values={values.location}
											errors={errors.location}
											touched={touched.location}
										/>
										{/* START DATE */}
										<DateInput
											title="Start Date"
											name="startDate"
											values={values.startDate}
											errors={errors.startDate}
											touched={touched.startDate}
										/>

										{/* END DATE */}
										<DateInput
											title="End Date"
											name="endDate"
											values={values.endDate}
											errors={errors.endDate}
											touched={touched.endDate}
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

export default withRouter(ModifyCampaign);
