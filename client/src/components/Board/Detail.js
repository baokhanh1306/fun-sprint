import React, { useEffect, useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ActionContainer from '../Action/ActionContainer';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBoard, remove, createAction, deleteAction, updateAction } from '../../store/board';

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
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const openModal = (id) => {
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

	const [editModal, setEditModal] = useState(false);
	const openEdit = (id) => {
		setEditModal(true);
	};

	const closeEdit = () => {
		setEditModal(false);
	};

	const params = useParams();
	const classes = useStyles();
	const dispatch = useDispatch();
	useFetch(getBoard, remove, params.id, dispatch);
	const boardState = useSelector((state) => state.board);
	const { board, loading } = boardState;

	const addAction = (name,type) => {
		dispatch(createAction(params.id, name, type));
		closeModal();
	}

	const handleDelete = (actionId,type) => {
		dispatch(deleteAction(params.id,actionId,type));
	}

	const handleEdit = (actionId,name,type) => {
		dispatch(updateAction(params.id, name, type,actionId));
		closeEdit();
	}

	if (loading || board === null) {
		return <div>Loading</div>;
	} else {
		return (
			<div className={classes.root}>
				<Grid container spacing={3}>
					<Grid item lg={4} s={12}>
						<h2>Went Well</h2>
						<ActionContainer
							actions={board['wentWell']}
							bg="#009688"
							type="wentWell"
							openModal={openModal}
							modalIsOpen={modalIsOpen}
							handleAdd={addAction}
							closeModal={closeModal}
							handleDelete={handleDelete}
							handleEdit={handleEdit}
							editModal={editModal}
							openEdit={openEdit}
							closeEdit={closeEdit}
						/>
					</Grid>
					<Grid item lg={4} s={12}>
						<h2>To Improve</h2>
						<ActionContainer
							actions={board['toImprove']}
							bg="#e91e63"
							type="toImprove"
							openModal={openModal}
							modalIsOpen={modalIsOpen}
							handleAdd={addAction}
							closeModal={closeModal}
							handleDelete={handleDelete}
							handleEdit={handleEdit}
							editModal={editModal}
							openEdit={openEdit}
							closeEdit={closeEdit}
						/>
					</Grid>
					<Grid item lg={4} s={12}>
						<h2>Action Items</h2>
						<ActionContainer
							actions={board['actions']}
							bg="#9c27b0"
							type="actions"
							openModal={openModal}
							modalIsOpen={modalIsOpen}
							handleAdd={addAction}
							closeModal={closeModal}
							handleDelete={handleDelete}
							handleEdit={handleEdit}
							editModal={editModal}
							openEdit={openEdit}
							closeEdit={closeEdit}
						/>
					</Grid>
				</Grid>
			</div>
		);
	}
};

const useFetch = (getBoard, remove, id, dispatch) => {
	useEffect(() => {
		dispatch(getBoard(id));
		return () => dispatch(remove());
		// eslint-disable-next-line
	}, [id]);
};

export default Detail;
