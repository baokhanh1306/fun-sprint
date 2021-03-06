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


const EditModal = ({ handleEdit, editModal, closeEdit, type,id }) => {
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
    console.log(id);
	return (
       
		<Modal
			isOpen={editModal}
			onRequestClose={closeEdit}
			style={modalStyles}
			contentLabel="Add an action"
		>
			<Title>Your new action name</Title>
			<input
				id="name"
				name="name"
				type="text"
				onChange={(e) => setNewName(e.currentTarget.value)}
				value={newName}
				placeholder="Name"
			/>
			<ModalButton onClick={() => handleEdit(id,newName,type)}>Confirm</ModalButton>
		</Modal>
	);
};

export default EditModal;
