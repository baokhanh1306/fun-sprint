import React from 'react';
import Detail from '../../components/Board/Detail';
import styled from 'styled-components';
import NavbarContainer from '../../containers/Navbar';

const Container = styled.div`
	min-height: calc(100vh-4rem);
	width: 80%;
	margin: auto;
`;

const BoardPage = () => {
	return (
		<>
			<NavbarContainer />
			<Container>
				<Detail />
			</Container>
		</>
	);
};

export default BoardPage;
