import React from 'react';
import { Container, Item, Links, Logo } from './Navbar.style';

const Navbar = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Navbar.Logo = ({ children, ...restProps }) => {
	return <Logo {...restProps}>{children}</Logo>;
};

Navbar.Item = ({ children, ...restProps }) => {
    return <Item {...restProps}>{children}</Item>
}

Navbar.Links = ({ children, ...restProps }) => {
    return <Links {...restProps}>{children}</Links>
}

export default Navbar;
