import React, { useState, useRef } from 'react';
import { Form, Formik, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
	Box,
	FilledInput,
	FormControl,
	FormHelperText,
	Input,
	InputLabel,
	OutlinedInput,
	TextField,
	Typography,
	Card,
	CardContent,
	Button,
	Grid,
	Snackbar,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

import axios from 'axios';
import { API } from '../../../API';
import AdminContent from './../../../components/admin/Content/index';
import TextInput from './../../../components/admin/Forms/TextInput';
import ImageInput from '../../../components/admin/Forms/ImageInput';
import CKEditorInput from '../../../components/admin/Forms/CKEditorInput';
import DateInput from './../../../components/admin/Forms/DateInput';
import SnackbarPopup from '../../../components/admin/SnackbarPopup';

// Alert Function
function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AddEvent = () => {
	// INITIAL STATES AND REFS
	const [selectedFile, setSelectedFile] = useState(null);
	const [notification, setNotification] = useState({
		message: '',
		isSuccess: true,
		isOpen: false,
	});

	//INITIAL FORM VALUES
	const initialValues = {
		title: '',
		description: '',
		image: null,
		content: '', // CKEDITOR
		organizer: '',
		location: '',
		startDate: new Date(),
		endDate: new Date(),
	};

	// VALIDATION FORM
	const validationSchema = Yup.object().shape({
		title: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required!'),
		description: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required!'),
		image: Yup.mixed().required('You need to provide image!'),
		content: Yup.string()
			.min('15', 'Too Short!')
			.max('1000', 'Too Long!')
			.required('Required!'), // CKEDITOR
		organizer: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
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

	const handleSubmit = async (values) => {
		const json = JSON.stringify(values);

		// POST FUNCTION
		await axios
			.post(
				API.add_event.url,
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
					message: 'Successfully created new event!',
					isOpen: true,
					isSuccess: true,
				});
				console.log(response);
			})
			.catch((err) => {
				setNotification({
					message: 'Failed to create new event!',
					isOpen: true,
					isSuccess: false,
				});
				console.log(err);
			});
	};

	return (
		<AdminContent>
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
										<CKEditorInput
											title="Content"
											name="content"
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
										{/* LOCATION */}
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

export default AddEvent;
