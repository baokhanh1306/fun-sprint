import { createSlice } from '@reduxjs/toolkit';
import api from '../utils/api';

const slice = createSlice({
	name: 'board',
	initialState: {
		board: null,
		loading: false,
		errorMsg: null,
	},
	reducers: {
		boardRequest: (state, action) => {
			state.loading = true;
		},
		boardSuccess: (state, action) => {
			state.loading = false;
			state.board = action.payload;
		},
		boardFailure: (state, action) => {
			state.loading = false;
			state.board = null;
			state.errorMsg = action.payload;
		},
		removeBoard: (state, action) => {
			state.loading = false;
			state.board = null;
		},
	},
});

const { boardRequest, boardSuccess, boardFailure, removeBoard } = slice.actions;

export const getBoard = (id) => async (dispatch) => {
	try {
		dispatch(boardRequest());
		const res = await api.get(`/boards/${id}`);
		const { board } = res.data;
		dispatch(boardSuccess(board));
	} catch (error) {
		dispatch(boardFailure(error.response.data.message));
	}
};

export const createAction = (boardId, name, type) => async (dispatch) => {
	try {
		dispatch(boardRequest());
		const res = await api.post(`/actions/${boardId}`, { name, type });
		const { board } = res.data;
		dispatch(boardSuccess(board));
	} catch (error) {
		dispatch(boardFailure(error.response.data.message));
	}
};

export const deleteAction = (boardId, actionId, type) => async (dispatch) => {
	try {
		dispatch(boardRequest());
		const res = await api.get(`/actions/delete/${boardId}`, {
			params: {
				actionId,
				type
			}
		});
		const { board } = res.data;
		dispatch(boardSuccess(board));	
	} catch (error) {
		dispatch(boardFailure(error.response.data.message));
	}
};

export const updateAction = (boardId, name, type, actionId) => async (
	dispatch,
) => {
	try {
		dispatch(boardRequest());
		const res = await api.put(`/actions/${boardId}`, { name, type, actionId});
		const { board } = res.data;
		dispatch(boardSuccess(board));
	} catch (error) {
		dispatch(boardFailure(error.response.data.message));
	}
};

export const remove = () => (dispatch) => {
	dispatch(removeBoard());
};

export default slice.reducer;
