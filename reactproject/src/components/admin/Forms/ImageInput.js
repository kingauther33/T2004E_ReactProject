import React, { useRef } from 'react';
import { Field } from 'formik';
import { TextField, Typography, Button } from '@material-ui/core';

const ImageInput = (props) => {
	const imageRef = useRef();

	return (
		<>
			<div className="col-3 py-3 mt-2">
				<h5 className="font-weight-bold align-self-center">{props.title}:</h5>
			</div>
			<div className="col-9">
				<Field name={props.name}>
					{({ field, form }) => (
						<input
							style={{ display: 'none' }}
							{...field}
							// type="file"
							type={props.type}
							// variant="outlined"
							className="my-2"
							onChange={(event) => {
								props.setFieldValue(event.target.files[0]);
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

export default ImageInput;
