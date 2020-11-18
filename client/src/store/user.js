import { createSlice } from '@reduxjs/toolkit';
import history from '../utils/history';
import api from '../utils/api';

const initUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

const slice = createSlice({
    name: 'user',
    initialState: {
        user: initUser,
        loading: false,
        errorMsg: null
    },
    reducers: {
        loginRequest: (state,action) => { state.loading = true },
        signupRequest: (state,action) => { state.loading = true },
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.loading = false;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        signupSuccess: (state,action) => { state.errorMsg = null; state.loading = false },
        loginFailure: (state, action) => { state.errorMsg = action.payload; state.loading = false },
        signupFailure: (state, action) => { state.errorMsg = action.payload; state.loading = false },
        logoutSuccess: (state,action) => { state.user = null; state.loading = false; state.errorMsg = null },
    }
});

const { loginRequest, signupRequest, loginSuccess, signupSuccess, loginFailure, signupFailure, logoutSuccess } = slice.actions;

export const login = (credentials) => async (dispatch) => {
    try {
		dispatch(loginRequest());
		const res = await api.post('/users/login', credentials);
		const { email, token } = res.data;
		localStorage.setItem('token', token);
        dispatch(loginSuccess(email));
        history.push('/dashboard');
	} catch (error) {
		dispatch(loginFailure(error.response.data.message));
	}
};

export const googleLogin = (code) => async(dispatch) => {
    try{
        dispatch(loginRequest());
        const res = await api.post('/users/google', { code } );
        const { email, token } = res.data;
        localStorage.setItem('token', token);
        dispatch(loginSuccess(email));
        history.push('/dashboard');
	} catch (error) {
		dispatch(loginFailure(error.response.data.message));
	}
};

export const signup = (credentials) => async (dispatch) => {
	try {
		dispatch(signupRequest());
		await api.post('/users/register', credentials);
        dispatch(signupSuccess());
        history.push('/login');
	} catch (error) {
		dispatch(signupFailure(error.response.data.message));
	}
};

export const logout = () => dispatch => {
	localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch(logoutSuccess());
};

export default slice.reducer;
