import React from 'react';
import { Field } from 'formik';
import { Typography } from '@material-ui/core';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CKEditorInput = (props) => {
	return (
		<>
			<div className="col-3 py-3 mt-2">
				<h5 className="font-weight-bold align-text-top">{props.title}:</h5>
			</div>
			<div className="col-12">
				<Field name={props.name}>
					{({ field, form }) => (
						<CKEditor
							editor={ClassicEditor}
							data={field.value}
							onChange={(event, editor) => {
								form.setFieldValue(props.name, editor.getData());
							}}
							className="my-2"
						/>
					)}
				</Field>
			</div>
			{props.errors && props.touched ? (
				<div className="col-12">
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

export default CKEditorInput;
