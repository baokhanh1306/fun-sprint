import React from 'react';
import { Form } from '../components';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login,googleLogin } from '../store/user';
import GoogleLogin from 'react-google-login';

const LoginForm = () => {
	const { register, handleSubmit, formState, errors } = useForm();
	const { isDirty } = formState;
	const dispatch = useDispatch();

	const responseGoogle = (authResult) => {
		try {
			if (authResult['code']) {
				console.log(authResult['code']);
				dispatch(googleLogin(authResult['code']));
			} else {
				throw new Error(authResult);
			}
		} catch (e) {
			console.log(e);
		}
	};

	const onSubmit = (data) => {
		dispatch(login(data));
	};
	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Form.Title>Login</Form.Title>
			<Form.Input
				id="email"
				type="text"
				placeholder="Email"
				name="email"
				register={register}
				required
				pattern={/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/}
			/>
			{errors.email?.type === 'required' && (
				<Form.Error>Email is required</Form.Error>
			)}
			{errors.email?.type === 'pattern' && (
				<Form.Error>Email is not right</Form.Error>
			)}
			<Form.Input
				id="password"
				type="password"
				placeholder="Password"
				name="password"
				register={register}
				required
			/>
			{errors.password && <Form.Error>Password is required</Form.Error>}
			<Form.Button bgColor="#8e24aa" type="submit" disabled={!isDirty}>
				Login
			</Form.Button>
			<GoogleLogin
				clientId="951153725606-8jkr3jmu7dd601kgnmgb1b4mj1ngnt45.apps.googleusercontent.com"
				buttonText="Login with google"
				responseType="code"
				redirectUri="postmessage"
				onSuccess={responseGoogle}
				onFailure={responseGoogle}
				cookiePolicy={'single_host_origin'}
				accessType="offline"
			/>
			<Form.Bottom>
				<Form.Link to="/register">Register</Form.Link>
			</Form.Bottom>
		</Form>
	);
};

export default LoginForm;
