import React, { useState } from 'react';

// FORMIK + YUP
import { Form, Formik, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// MATERIAL UI
import {
	FilledInput,
	FormControl,
	FormHelperText,
	Input,
	InputLabel,
	OutlinedInput,
	TextField,
	Typography,
} from '@material-ui/core';

// CK EDITOR + HTML PARSER
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';

import AdminContent from '../../components/admin/Content';

const initialValues = {
	friends: [
		{
			name: '',
			email: '',
		},
	],
};

const Demo = () => {
	const [data, setData] = useState('');
	const [addedData, setAddedData] = useState(0);

	const handleChange = (e, editor) => {
		const data = editor.getData();
		setData(data);
	};

	return (
		<AdminContent>
			{/* Test FORMIK */}
			<Formik
				initialValues={initialValues}
				validationSchema={Yup.object({
					friends: Yup.array().of(
						Yup.object({
							name: Yup.string().required('Required'),
							email: Yup.string().email('Invalid Email').required('Required'),
						})
					),
				})}
				onSubmit={(values) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
					}, 500);
				}}
			>
				{({ values, errors, touched, isSubmitting }) => (
					<Form>
						<FieldArray name="friends">
							{({ push, remove }) => (
								<>
									{values.friends &&
										values.friends.length > 0 &&
										values.friends.map((friend, index) => (
											<div className="row">
												<div className="col">
													<Field name={`friends[${index}].name`}>
														{({ field, form }) => (
															/* {<FormControl>
																<InputLabel htmlFor="component-helper">Name</InputLabel>
																<Input
																	{...field}
																	id="component-helper"
																	aria-describedby="component-helper-text"
																/>
															</FormControl>} */
															<TextField
																{...field}
																label="Name"
																type="text"
																placeholder="Jane Doe"
																variant="filled"
															/>
														)}
													</Field>
													<ErrorMessage name={`friends[${index}].name`}>
														{(msg) => (
															<Typography id="component-helper-text" color="error">
																{msg}
															</Typography>
														)}
													</ErrorMessage>
												</div>
												<div className="col">
													<Field
														name={`friends[${index}].email`}
														type="email"
														placeholder="An@gmail.com"
													/>
												</div>
												<div className="col">
													<button type="button" onClick={() => remove(index)}>
														X
													</button>
												</div>
											</div>
										))}
									<button
										type="button"
										onClick={() => push({ name: '', email: '' })}
										className="btn btn-secondary"
									>
										Add Friend
									</button>
								</>
							)}
						</FieldArray>
						<button type="submit" disabled={isSubmitting} className="btn btn-danger ml-3">
							Invite
						</button>
						<pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
					</Form>
				)}
			</Formik>

			{/* TEST CKEDITOR5 */}
			<h2>
				<u>CKEditor5 with React.js</u>
			</h2>
			<div style={{ width: '700px', display: 'inline-block', textAlign: 'left' }}>
				<div
					style={{
						width: '700px',
						display: 'inline-block',
						textAlign: 'right',
						marginBottom: '5px',
					}}
				>
					<button
						style={{ backgroundColor: 'black', color: 'white' }}
						onClick={() => setAddedData(!addedData)}
					>
						{addedData ? 'Hide Data' : 'Show Data'}
					</button>
				</div>
				<CKEditor editor={ClassicEditor} data={data} onChange={handleChange} />
				<div>{addedData ? parse(data) : ''}</div>
			</div>
		</AdminContent>
	);
};

export default Demo;
