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

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}));

const ModifyCategory = (props) => {
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
		name: context.item.name,
		image: context.item.image,
	};

	// VALIDATION FORM
	const validationSchema = Yup.object().shape({
		id: Yup.number(),
		name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required!'),
		image: Yup.mixed().required('You need to provide image!'),
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
				API.edit_category.url + context.item.id,
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
					message: 'Successfully edit category!',
					isOpen: true,
					isSuccess: true,
				});
				console.log(response);
			})
			.catch((err) => {
				setNotification({
					message: 'Failed to edit category!',
					isOpen: true,
					isSuccess: false,
				});
				console.log(err);
			});
	};

	return (
		<AdminContent>
			<Typography variant="h4">Editing {context.item.name}</Typography>
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

export default withRouter(ModifyCategory);
