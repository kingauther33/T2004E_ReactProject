import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

// Alert Function
function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackbarPopup = (props) => {
	// SNACKBAR ALERT CLOSE
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		// Set NOTIFICATION CLOSE
		props.setNotification({
			isOpen: false,
		});
	};

	return (
		<Snackbar
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left',
			}}
			open={props.notification.isOpen}
			autoHideDuration={6000}
			onClose={handleClose}
		>
			<Alert
				onClose={handleClose}
				severity={props.notification.isSuccess ? 'success' : 'error'}
			>
				{props.notification.message}
			</Alert>
		</Snackbar>
	);
};

export default SnackbarPopup;
