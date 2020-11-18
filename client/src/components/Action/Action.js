import React from 'react';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	makeStyles,
	Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/EditOutlined';
import EditModal from './EditModal';

const useStyles = makeStyles((theme) => ({
	card: {
		backgroundColor: (props) => props.bg,
		margin: '2rem 0',
	},
	btn: {
		fontSize: '1.2rem',
		color: 'white',
	},
	text: {
		color: 'white',
		display: 'flex',
		justifyContent: 'space-between',
	},
}));

const Action = ({ name, type, id, bg, handleDelete, openEdit, ...rest }) => {
	const classes = useStyles({ bg });
	return (
		<Card className={classes.card}>
			<CardContent>
				<Typography
					variant="h5"
					component="h2"
					gutterBottom
					className={classes.text}
				>
					{name}
					<div>
						<Button className={classes.btn} onClick={() => handleDelete(id,type)}>
							<DeleteIcon />
						</Button>
						<Button className={classes.btn} onClick={() => openEdit()}>
							<EditIcon />
						</Button>
					</div>
				</Typography>
			</CardContent>
			<EditModal type={type} id={id} {...rest} />
			{/* <CardActions>
				<Button className={classes.btn}>
					<DeleteIcon />
				</Button>
				<Button className={classes.btn}>
					<EditIcon />
				</Button>
			</CardActions> */}
		</Card>
	);
};

export default Action;
