import React from 'react';
import { Navbar } from '../components';

const NavbarContainer = () => {
	return (
		<Navbar>
			<Navbar.Logo to='/'>Funretro</Navbar.Logo>
			<Navbar.Links>
				<Navbar.Item to='/register'>Register</Navbar.Item>
				<Navbar.Item to='/login'>Login</Navbar.Item>
			</Navbar.Links>
		</Navbar>
	);
};

export default NavbarContainer;
