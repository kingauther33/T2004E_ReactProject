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
} from '@material-ui/core';

// CK EDITOR + HTML PARSER + DATETIME PICKER
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
import DateTimePicker from 'react-datetime-picker';
import { format } from 'date-fns';

import axios from 'axios';
import AdminContent from './../../../components/admin/Content/index';
import TextInput from './../../../components/admin/Forms/TextInput';
import ImageInput from '../../../components/admin/Forms/ImageInput';
import CKEditorInput from '../../../components/admin/Forms/CKEditorInput';
import DateInput from './../../../components/admin/Forms/DateInput';

const AddCampaign = () => {
	const validationSchema = Yup.object().shape({
		title: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required!'),
		description: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required!'),
		image: Yup.mixed()
			.required('You need to provide image!')
			.test('fileSize', 'The file is too large', (value) => {
				return value && value[0].size <= 2000000;
			}),
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
		startDate: Yup.date().min(new Date('01-01-2021')).max(new Date()),
		endDate: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required!'),
	});

	const [data, setData] = useState('');
	const [addedData, setAddedData] = useState(0);
	const [selectedFile, setSelectedFile] = useState(null);
	// const imageRef = useRef();

	const handleChange = (e, editor) => {
		const data = editor.getData();
		setData(data);
	};

	const initialValues = {
		title: '',
		description: '',
		image: '',
		content: '', // CKEDITOR
		totalDonation: 0,
		sponsor: '',
		startDate: new Date(),
		endDate: new Date(),
	};

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

	return (
		<AdminContent>
			<Box m={4}>
				<Card>
					<CardContent className="m-2">
						<Formik
							initialValues={initialValues}
							onSubmit={(values) => {
								setTimeout(() => {
									alert(JSON.stringify(values, null, 2));
								}, 500);
							}}
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
				</Card>
			</Box>
		</AdminContent>
	);
};

export default AddCampaign;
