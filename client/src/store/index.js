import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import userReducer from './user';
import boardReducer from './board';

const reducer = combineReducers({
	user: userReducer,
	board: boardReducer
});

const store = configureStore({ reducer });

export default store;