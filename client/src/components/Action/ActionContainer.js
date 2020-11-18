import React from 'react';
import Action from './Action';
import styled from 'styled-components/macro';
import AddIcon from '@material-ui/icons/AddOutlined';
import ActionModal from './ActionModal';
import EditModal from './EditModal';

const Button = styled.button`
	width: 100%;
	padding: 0.5rem 0;
`;

const ActionContainer = ({ actions, type, openModal, handleDelete, handleAdd, ...rest }) => {
	return (
		<>
			{actions.map((action) => (
				<Action name={action.name} type={type} key={action._id} handleDelete={handleDelete} id={action._id} {...rest}/>
			))}
			<Button onClick={openModal}>
				<AddIcon />
			</Button>
            <ActionModal type={type} handleAdd={handleAdd} {...rest}/>
		</>
	);
};

export default ActionContainer;
