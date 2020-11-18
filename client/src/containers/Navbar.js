import React from 'react';
import styled from 'styled-components';
import { Navbar } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/user';

const User = styled.h3`
	font-size: 1.6rem;
`;

const NavbarContainer = () => {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(logout());
	};
	return (
		<Navbar>
			{!!user.user ? (
				<Navbar.Logo to="/dashboard">Funretro</Navbar.Logo>
			) : (
				<Navbar.Logo to="/">Funretro</Navbar.Logo>
			)}
			{!!user.user ? (
				<Navbar.Links>
					<User>{user.user}</User>
					<Navbar.Button onClick={handleClick}>Logout</Navbar.Button>
				</Navbar.Links>
			) : (
				<Navbar.Links>
					<Navbar.Item to="/register">Register</Navbar.Item>
					<Navbar.Item to="/login">Login</Navbar.Item>
				</Navbar.Links>
			)}
		</Navbar>
	);
};

export default NavbarContainer;
