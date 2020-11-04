import React from 'react';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	Grid,
	makeStyles,
	Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
	card: {
		minWidth: 275,
	},
	pos: {
		marginBottom: 12,
	},
	btn: {
		fontSize: '1.4rem',
	},
});

const Detail = () => {
    const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item lg={4} s={12}>
					<h2>Went well</h2>
				</Grid>
				<Grid item lg={4} s={12}>
					<h2>To Improve</h2>
				</Grid>
				<Grid item lg={4} s={12}>
					<h2>Action Items</h2>
				</Grid>
			</Grid>
		</div>
	);
};

export default Detail;
