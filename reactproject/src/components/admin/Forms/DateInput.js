import React from 'react';
import { Field } from 'formik';
import { Typography } from '@material-ui/core';
import DateTimePicker from 'react-datetime-picker';

const DateInput = (props) => {
	return (
		<>
			<div className="col-3 py-3 mt-2">
				{/* <h5 className="font-weight-bold">Title:</h5> */}
				<h5 className="font-weight-bold">{props.title}:</h5>
			</div>
			<div className="col-9">
				<Field name={props.name}>
					{({ field, form }) => (
						<DateTimePicker
							{...field}
							onBlur={form.handleBlur(field.name)}
							format="dd-MM-y"
							selected={(field.value && new Date(field.value)) || null}
							onChange={(val) => {
								form.setFieldValue(field.name, val);
							}}
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

export default DateInput;
