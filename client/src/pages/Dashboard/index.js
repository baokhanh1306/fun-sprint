import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Board from '../../components/Board';
import NavbarContainer from '../../containers/Navbar';
import api from '../../utils/api';
import BoardModal from '../../components/Board/BoardModal';

const Container = styled.div`
	min-height: calc(100vh - 4rem);
	width: 80%;
	margin: auto;
`;

const Title = styled.h2`
	font-size: 1.6rem;
	margin: 1rem 0 2rem 0;
	line-height: 1.4;
	color: blue;
`;

const Button = styled.button`
	background-color: #cd5441;
	font-size: 1.6rem;
	padding: 1rem 1.5rem;
	color: white;
	border: none;
	outline: none;
	border-radius: 0.5rem;
	margin-bottom: 1rem;
`;

const Dashboard = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const openModal = () => {
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

	const addModal = async (name) => {
		await api.post('/boards', { name });
		closeModal();
	};

	return (
		<>
			<NavbarContainer />
			<Container>
				<Title>My Dashboard </Title>
				<Button onClick={openModal}>Add a board</Button>
				<BoardModal
					modalIsOpen={modalIsOpen}
					closeModal={closeModal}
					handleConfirm={addModal}
				/>
				<Board />
			</Container>
		</>
	);
};

export default Dashboard;
