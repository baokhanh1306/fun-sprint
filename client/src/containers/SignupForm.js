import React from 'react';
import { useForm } from 'react-hook-form';
import { Form } from '../components';
import { useDispatch } from 'react-redux';
import { signup } from '../store/user';

const SignupForm = () => {
	const dispatch = useDispatch();
	const { register, handleSubmit, formState, errors } = useForm();

	const { isDirty } = formState;

	const onSubmit = (data) => {
		dispatch(signup(data));
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Form.Title>Register</Form.Title>
			<Form.Input
				id="name"
				name="name"
				placeholder="Name"
				register={register}
				required
			/>
			{errors.name && <Form.Error>Name is required</Form.Error>}
			<Form.Input
				id="email"
				name="email"
				placeholder="Email"
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
				name="password"
				placeholder="Password"
				type="password"
				register={register}
				required
			/>
			{errors.password && <Form.Error>Password is required</Form.Error>}
			<Form.Button bgColor="#8e24aa" disabled={!isDirty}>
				Register
			</Form.Button>
			<Form.Button bgColor="#cd5441">Google Login</Form.Button>
			<Form.Bottom>
				<Form.Link to="/login">Login</Form.Link>
			</Form.Bottom>
		</Form>
	);
};

export default SignupForm;
