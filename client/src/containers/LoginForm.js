import React from 'react';
import { Form } from '../components';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../store/user';

const LoginForm = () => {
	const { register, handleSubmit, formState, errors } = useForm();
	const { isDirty } = formState;
	const dispatch = useDispatch();

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
            {errors.email?.type === "required" && <Form.Error>Email is required</Form.Error>}
            {errors.email?.type === "pattern" && <Form.Error>Email is not right</Form.Error>}
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
			<Form.Button bgColor="#cd5441">Google Login</Form.Button>
			<Form.Bottom>
				<Form.Link to="/register">Register</Form.Link>
			</Form.Bottom>
		</Form>
	);
};

export default LoginForm;
