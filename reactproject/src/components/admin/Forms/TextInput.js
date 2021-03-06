import React from 'react';
import { Field } from 'formik';
import { TextField, Typography } from '@material-ui/core';

const TextInput = (props) => {
	return (
		<>
			<div className="col-3 py-3 mt-2">
				{/* <h5 className="font-weight-bold">Title:</h5> */}
				<h5 className="font-weight-bold">{props.title}:</h5>
			</div>
			<div className="col-9">
				{/* <Field name="title"> */}
				<Field name={props.name}>
					{({ field, form }) => (
						<TextField
							// fullWidth
							fullWidth={props.fullWidth}
							{...field}
							// type="text"
							type={props.type}
							// placeholder="Title"
							placeholder={props.title}
							// variant="outlined"
						/>
					)}
				</Field>
			</div>
			{props.errors && props.touched ? (
				<div className="offset-3 col-9">
					<Typography variant="inherit" color="error">
						{props.errors}
					</Typography>
				</div>
			) : (
				''
			)}
		</>
	);
};

export default TextInput;
