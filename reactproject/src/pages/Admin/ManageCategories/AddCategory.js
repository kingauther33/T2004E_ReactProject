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

// CK EDITOR + HTML PARSER + DATETIME PICKER
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
import DateTimePicker from 'react-datetime-picker';
import { format } from 'date-fns';

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

const AddCategory = () => {
	// INITIAL STATES AND REFS
	const [selectedFile, setSelectedFile] = useState(null);
	const [notification, setNotification] = useState({
		message: '',
		isSuccess: true,
		isOpen: false,
	});
	// const imageRef = useRef();

	//INITIAL FORM VALUES
	const initialValues = {
		name: '',
		image: null,
	};

	// VALIDATION FORM
	const validationSchema = Yup.object().shape({
		name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required!'),
		image: Yup.mixed().required('You need to provide image!'),
		/* 	.test('fileSize', 'The file is too large', (value) => {
				return value && value[0].size <= 2000000;
			}) */
	});

	const handleSubmit = async (values) => {
		const json = JSON.stringify(values);

		// POST FUNCTION
		await axios
			.post(
				API.add_category.url,
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
					message: 'Successfully created new campaign!',
					isOpen: true,
					isSuccess: true,
				});
				console.log(response);
			})
			.catch((err) => {
				setNotification({
					message: 'Failed to create new campaign!',
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
										{/* NAME */}
										<TextInput
											title="Name"
											type="text"
											fullWidth={true}
											name="name"
											values={values.name}
											errors={errors.name}
											touched={touched.name}
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

export default AddCategory;
