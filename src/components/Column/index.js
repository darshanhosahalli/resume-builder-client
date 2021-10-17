/**
 *  Column component
 */

import React from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const ColumnContainer = Styled.div`
    flex: 100%;
    padding: 0rem;
    display: flex;
    flex-direction: ${props => props.flexDirection};
    @media (min-width: 769px) {
        padding: 0.2rem;
        flex: 50%;
        display: block;
    }
`;

const Column = (props) => {
    return <ColumnContainer>
        {props.children}
    </ColumnContainer>
}

Column.propTypes = {
    children: PropTypes.node.isRequired,
    flexDirection: PropTypes.string
}

export default Column;
