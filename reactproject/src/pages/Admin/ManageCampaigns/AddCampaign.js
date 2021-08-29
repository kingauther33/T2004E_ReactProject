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

// CK EDITOR + HTML PARSER
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';

import axios from 'axios';
import AdminContent from './../../../components/admin/Content/index';

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
		totalDonation: Yup.number(),
		sponsor: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required!'),
		startDate: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required!'),
		endDate: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required!'),
	});

	const [data, setData] = useState('');
	const [addedData, setAddedData] = useState(0);
	const [selectedFile, setSelectedFile] = useState(null);
	const imageRef = useRef();

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
		startDate: new Date('2021-08-24'),
		endDate: new Date('2021-08-24'),
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
										<div className="col-3 py-3 mt-2">
											<h5 className="font-weight-bold">Title:</h5>
										</div>
										<div className="col-9">
											<Field name="title">
												{({ field, form }) => (
													<TextField
														fullWidth
														{...field}
														type="text"
														placeholder="Title"
														// variant="outlined"
													/>
												)}
											</Field>
										</div>
										{errors.title && touched.title ? (
											<div className="offset-3 col-9">
												<Typography variant="inherit" color="error">
													{errors.title}
												</Typography>
											</div>
										) : (
											''
										)}

										{/* DESCRIPTION */}
										<div className="col-3 py-3 mt-2">
											<h5 className="font-weight-bold">Description:</h5>
										</div>
										<div className="col-9">
											<Field name="description">
												{({ field, form }) => (
													<TextField
														{...field}
														fullWidth
														type="text"
														placeholder="Description"
													/>
												)}
											</Field>
										</div>
										{errors.description && touched.description ? (
											<div className="offset-3 col-9">
												<Typography variant="inherit" color="error">
													{errors.description}
												</Typography>
											</div>
										) : (
											''
										)}

										{/* IMAGE */}
										<div className="col-3 py-3 mt-2">
											<h5 className="font-weight-bold align-self-center">Image:</h5>
										</div>
										<div className="col-9">
											<Field name="image">
												{({ field, form }) => (
													<input
														style={{ display: 'none' }}
														{...field}
														type="file"
														// variant="outlined"
														className="my-2"
														onChange={(event) => {
															setFieldValue(event.target.files[0]);
														}}
														ref={imageRef}
													/>
												)}
											</Field>
											<Button
												variant="contained"
												color="primary"
												type="button"
												className="mt-3"
												onClick={() => imageRef.current.click()}
											>
												Add new Image
											</Button>
										</div>
										{errors.image && touched.image ? (
											<div className="offset-3 col-9">
												<Typography variant="inherit" color="error">
													{errors.image}
												</Typography>
											</div>
										) : (
											''
										)}
										{/* <div className="col-3">
											<button
												type="button"
												className="btn btn-primary"
												onClick={fileUploadHandler}
											>
												Upload File
											</button>



                    {/* CONTENT */}
										<div className="col-3 py-3 mt-2">
											<h5 className="font-weight-bold align-text-top">Content:</h5>
										</div>
										<div className="col-12">
											<Field name="content">
												{({ field, form }) => (
													<CKEditor
														editor={ClassicEditor}
														data={field.value}
														onChange={(event, editor) => {
															form.setFieldValue('content', editor.getData());
														}}
														className="my-2"
													/>
												)}
											</Field>
										</div>
										{errors.content && touched.content ? (
											<div className="col-12">
												<Typography variant="inherit" color="error">
													{errors.content}
												</Typography>
											</div>
										) : (
											''
										)}

										{/* TOTAL DONATION */}
										<div className="col-3 py-3 mt-2">
											<h5 className="font-weight-bold">Donation:</h5>
										</div>
										<div className="col-9">
											<Field name="totalDonation">
												{({ field, form }) => (
													<TextField
														{...field}
														type="number"
														placeholder="Total Donation"
													/>
												)}
											</Field>
										</div>
										{errors.totalDonation && touched.totalDonation ? (
											<div className="offset-3 col-9">
												<Typography variant="inherit" color="error">
													{errors.totalDonation}
												</Typography>
											</div>
										) : (
											''
										)}

										{/* SPONSOR */}
										<div className="col-3 py-3 mt-2">
											<h5 className="font-weight-bold">Sponsor:</h5>
										</div>
										<div className="col-9">
											<Field name="sponsor">
												{({ field, form }) => (
													<TextField
														{...field}
														fullWidth
														type="text"
														placeholder="Sponsor"
													/>
												)}
											</Field>
										</div>
										{errors.sponsor && touched.sponsor ? (
											<div className="offset-3 col-9">
												<Typography variant="inherit" color="error">
													{errors.sponsor}
												</Typography>
											</div>
										) : (
											''
										)}

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
