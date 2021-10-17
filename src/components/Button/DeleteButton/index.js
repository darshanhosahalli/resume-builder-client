import React, { useContext } from 'react';
import EditContext from '../../../utils/EditContext';

const DeleteButton = ({ onClickHandler }) => {
    const editContext = useContext(EditContext);
    if(editContext) {
        return <i className="delete icon" style={{ cursor: 'pointer', margin: '0.5rem' }} onClick={ () => { onClickHandler() }} ></i>
    }
    return '';
}

export default DeleteButton;