import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';


const ModalButton = styled.button`
	background-color: #cd5441;
	padding: 0.5rem 1rem;
	margin: 1rem 2rem;
	font-size: 1.4rem;
	border-radius: 0.8rem;
	border: none;
	outline: none;

	&:hover {
		opacity: 0.8;
	}
`;


const Title = styled.h2`
	font-size: 1.6rem;
	margin: 1rem 0 2rem 0;
	line-height: 1.4;
	color: blue;
`;


const BoardModal = ({ handleConfirm, modalIsOpen, closeModal }) => {
	const [newName, setNewName] = useState('');
	const modalStyles = {
		content: {
			top: '50%',
			left: '50%',
			right: 'auto',
			bottom: 'auto',
			marginRight: '-50%',
			transform: 'translate(-50%, -50%)',
			paddingTop: '1rem',
		},
	};
	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			style={modalStyles}
			contentLabel="Add a board"
		>
			<Title>Your board name</Title>
			<input
				id="name"
				name="name"
				type="text"
				onChange={(e) => setNewName(e.currentTarget.value)}
				value={newName}
				placeholder="Name"
			/>
			<ModalButton onClick={() => handleConfirm(newName)}>Confirm</ModalButton>
		</Modal>
	);
};

export default BoardModal;
