import React from 'react';
import styled from 'styled-components';
import NavbarContainer from '../../containers/Navbar';

const Wrapper = styled.div`
    height: 100vh;
`;  

const Container = styled.div`
	min-height: calc(100vh - 4rem);
	width: 80%;
	margin: auto;
    display: flex;
    justify-content: center;
`;

const Header = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    margin-top: 4rem;
`;

const Welcome = () => {
	return (
		<Wrapper>
			<NavbarContainer />
			<Container>
                <Header>Improve with Fun Sprint Retrospectives</Header>
            </Container>
		</Wrapper>
	);
};

export default Welcome;
