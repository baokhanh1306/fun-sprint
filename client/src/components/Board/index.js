import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	Grid,
	makeStyles,
	Typography,
} from '@material-ui/core';
import BoardModal from './BoardModal';
import { Link } from 'react-router-dom';

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
		fontSize: '1.4rem',
	},
}));

const Board = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [boardId, setBoardId] = useState('');
	const openModal = (id) => {
		setModalIsOpen(true);
		setBoardId(id);
	};

	const closeModal = () => {
		setModalIsOpen(false);
		setBoardId('');
	};
	const classes = useStyles();
	const [boards, setBoards] = useState([]);
	useEffect(() => {
		const fetchBoards = async () => {
			const {
				data: { boards },
			} = await api.get('/boards');
			setBoards(boards);
		};
		fetchBoards();
	}, [boards]);

	const handleDelete = async (id) => {
		await api.delete(`/boards/${id}`);
	};

	const handleRename = async (name) => {
		await api.put(`/boards/${boardId}`, { name });
		closeModal();
	};
	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				{boards.map((board) => (
					<Grid item lg={3}>
						<Card
							className={classes.card}
							
						>
							<CardActionArea component={Link} to={`/boards/${board._id}`}>
								<CardContent>
									<Typography
										variant="h5"
										component="h2"
										gutterBottom
									>
										{board.name}
									</Typography>
									<Typography
										className={classes.pos}
										color="textSecondary"
									>
										{new Date(
											board.createdAt,
										).toDateString()}
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button className={classes.btn} color="primary">
									URL
								</Button>
								<Button
									className={classes.btn}
									color="primary"
									onClick={() => handleDelete(board._id)}
								>
									Delete
								</Button>
								<Button
									className={classes.btn}
									color="primary"
									onClick={() => openModal(board._id)}
								>
									Rename
								</Button>
								<BoardModal
									modalIsOpen={modalIsOpen}
									closeModal={closeModal}
									handleConfirm={handleRename}
								/>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Board;
