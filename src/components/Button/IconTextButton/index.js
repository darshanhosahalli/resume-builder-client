import React, { useState } from 'react';
import IconImage from '../../image/icon';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = Styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0rem;
    background: #fff;
    border-radius: 5px;
    margin: 0.5rem;
    border: none;
    box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);
    background-color: rgba(222, 222, 222,0.2);
    cursor: pointer;
    opacity: ${props => props.active? '' : '0.5' };
`;

const IconDiv = Styled.div`
    margin-top: 0.5rem;
    cursor: pointer;
`;

const StyledLabel = Styled.label`
    padding: 0.5rem;
    background-color: red;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    width: 100%;
`
;
const IconTextButton = ({ icon, label, onClick, selected=false }) => {

    const [clicked, setClicked] = useState(selected);

    const onClickHandler = () => {
        console.log('clicked');
        setClicked(!clicked);
        onClick(clicked);
    }

    return <StyledButton onClick={ () => { onClickHandler() }} active={clicked}>
        <IconDiv>
            <IconImage
                src={icon}
                alt={label}
            />
        </IconDiv>
        <StyledLabel>{label}</StyledLabel>
    </StyledButton>
}

IconTextButton.propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
}

export default IconTextButton;