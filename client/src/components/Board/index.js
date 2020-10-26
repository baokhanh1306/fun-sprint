import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Button,
	Card,
    CardActions,
	CardContent,
	Grid,
	makeStyles,
	Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
        fontSize: "1.4rem" 
    }
}));

const Board = () => {
	const classes = useStyles();
	const [boards, setBoards] = useState([]);
	useEffect(() => {
		const fetchBoards = async () => {
			const {
				data: { boards },
			} = await axios.get('/boards', {
				headers: {
					authorization:
						'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjEyM0BnbWFpbC5jb20iLCJpYXQiOjE2MDM1NjYzMTF9.eTBar_MmS4z-dzDWw_wMcAOmS68gcJyhBqEM7By_Z4E',
				},
			});
			console.log(boards);
			setBoards(boards);
		};
		fetchBoards();
		console.log(boards);
	}, []);
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				{boards.map((board) => (
					<Grid item lg={3}>
						<Card className={classes.card}>
							<CardContent>
								<Typography variant="h5" component="h2" gutterBottom>
									{board.name}
								</Typography>
								<Typography
									className={classes.pos}
									color="textSecondary"
								>
									{new Date(board.createdAt).toDateString()}
								</Typography>
							</CardContent>
                            <CardActions>
                                <Button className={classes.btn} color="primary">URL</Button>
                            </CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Board;
