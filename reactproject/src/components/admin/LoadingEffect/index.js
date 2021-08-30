import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';

// style for Loading effect
const useStyles = makeStyles((theme) => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff',
	},
}));

const LoadingEffect = ({ loading }) => {
	const classes = useStyles();

	return (
		<Backdrop className={classes.backdrop} open={loading}>
			<CircularProgress color="inherit" />
		</Backdrop>
	);
};

export default LoadingEffect;
