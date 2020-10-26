import React from 'react';
import styled from 'styled-components/macro';
import Board from '../../components/Board';
import NavbarContainer from '../../containers/Navbar';

const Container = styled.div`
	min-height: calc(100vh-4rem);
	width: 80%;
	margin: auto;
`;

const Title = styled.h2`
    font-size: 1.6rem;
    margin: 1rem 0 2rem 0;
    line-height: 1.4;
    color: blue;
`;

const Dashboard = () => {
	return (
		<>
			<NavbarContainer />

			<Container>
				<Title>My Dashboard </Title>
				<Board />
			</Container>
		</>
	);
};

export default Dashboard;
