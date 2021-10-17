/**
 *  Card caontainer component
 */

import React, { useState, useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import EditContext from '../../utils/EditContext';

const StyledCardContainer = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    background-color: #fff;
    border-radius: 15px;
    margin: 0.2rem 0rem 0rem 0rem;
    padding: 0rem;
    width: 100%;
    @media (min-width: 700px) {
        margin: 0.5rem;
        padding: 1rem;
    }
`;

const StyledDiv = Styled.div`
    display: flex;
    justify-content: space-between;
    width: 95%;
    @media (min-width: 769px) {
            display: flex;
            justify-content: space-between;
            width: 95%;
            margin: 0.3rem;
    }
`;

const CardsContainer = (props) => {
    
    const [ edit, setEdit] = useState(false);
    const cardRef = useRef();
    const editContext = useContext(EditContext);
    const iconClass = edit? 'custom-icon check icon' : 'custom-icon pencil alternate icon';

    useEffect(() => {
        const setEditable = (event) => {
            if(cardRef.current != null) {
                if (cardRef.current.contains(event.target)) {
                    return;
                }
                setEdit(false);
            }
        };
        typeof document != 'undefined' && document.getElementsByTagName('body')[0].addEventListener('click', setEditable);

        return () => {
            typeof document != 'undefined' && document.getElementsByTagName('body')[0].removeEventListener('click', setEditable);
        }
    },[edit]);

    const renderEdit = () => {
        if(editContext) {
            return <i onClick={ () => setEdit(!edit) } className={iconClass} style={{ cursor: 'pointer' }}></i>
        }
    }

    return <StyledCardContainer ref={cardRef}>
                <StyledDiv>
                    <EditContext.Provider value={edit}>
                        {props.children}
                    </EditContext.Provider>
                </StyledDiv>
                {renderEdit()}
            </StyledCardContainer>
}

CardsContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default CardsContainer;