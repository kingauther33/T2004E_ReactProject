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

const AddCampaign = () => {
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
		title: '',
		description: '',
		image: null,
		content: '', // CKEDITOR
		totalDonation: 0,
		sponsor: '',
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
		/* 	.test('fileSize', 'The file is too large', (value) => {
				return value && value[0].size <= 2000000;
			}) */
		content: Yup.string()
			.min('15', 'Too Short!')
			.max('1000', 'Too Long!')
			.required('Required!'), // CKEDITOR
		totalDonation: Yup.number()
			.required('Required!')
			.positive('Donation must be a positive number!')
			.test(
				'maxDigits',
				'Donation must have 2 digits or more',
				(number) => String(number).length >= 2
			),
		sponsor: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required!'),
		startDate: Yup.date().min(
			new Date('2021-01-01'),
			'Start Date must be after 01/01/2021'
		),
		endDate: Yup.date()
			.min(new Date(), `End Date must be after ${new Date().toLocaleDateString()}`)
			.required('Required!'),
	});

	/* 	const fileSelectedHandler = (e) => {
		setSelectedFile(e.target.files[0]);
	};
 */
	const fileUploadHandler = () => {
		const fd = new FormData();
		fd.append('image', selectedFile, selectedFile.name);
		axios.post('somthing', fd, {
			onUploadProgress: (progressEvent) => {
				console.log(
					'Upload Proress: ' +
						Math.round((progressEvent.loaded / progressEvent.total) * 100) +
						'%'
				);
			},
		});
	};

	/* const convertToBinary = (image) => {
		let accept = {
			binary: ['image/png', 'image/jpeg'],
			text: ['text/plain', 'text/css', 'application/xml', 'text/html'],
		};

			// if file type could be detected
			if (image !== null) {
				if (accept.binary.indexOf(image.type) > -1) {
					// image is a binary, which we accept
					let data = image.getAsBinary();
				} else if (accept.text.indexOf(image.type) > -1) {
					// image is of type text, which we accept
					let data = image.getAsText();
					// modify data with string methods
				}
			}
		}

		return image
	} */

	const handleSubmit = async (values) => {
		/* const postObject = {};
		postObject.title = values.title;
		postObject.description = values.description;
		postObject.image = values.image;
		postObject.content = values.content;
		postObject.totalDonation = values.totalDonation;
		postObject.sponsor = values.sponsor;
		postObject.startDate = format(values.startDate, 'yyyy-MM-dd');
		postObject.endDate = format(values.endDate, 'yyyy-MM-dd'); */

		console.log(values);
		/* const formData = new FormData();
		formData.append('title', 'YOOO');
		formData.append('description', values.description);
		formData.append('image', values.image);
		formData.append('content', values.content);
		formData.append('totalDonation', values.totalDonation);
		formData.append('sponsor', values.sponsor);
		formData.append('startDate', values.startDate);
		formData.append('endDate', values.endDate);
		console.log(formData); */

		const json = JSON.stringify(values);

		/* console.log('Object Values: ' + values);
		const postObject = { ...values };
		console.log('Values của Image: ' + postObject.image);
		/* let r = new FileReader();
		r.readAsBinaryString(postObject.image);
		console.log("Results of file reader: "+ r.result);  */

		// POST FUNCTION
		await axios
			.post(
				API.add_campaign.url,
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
										{/* TOTAL DONATION */}
										<TextInput
											title="Donation"
											type="number"
											fullWidth={false}
											name="totalDonation"
											values={values.totalDonation}
											errors={errors.totalDonation}
											touched={touched.totalDonation}
										/>
										{/* SPONSOR */}
										<TextInput
											title="Sponsor"
											type="text"
											fullWidth={true}
											name="sponsor"
											values={values.sponsor}
											errors={errors.sponsor}
											touched={touched.sponsor}
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

export default AddCampaign;
