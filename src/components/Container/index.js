/**
 * Card container component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const StyledContainer = Styled.div`
    @media (min-width: 769px) {
        margin: 0px!important;
    }
`;

const Container = ({ children }) => {
    return <StyledContainer className="ui container">
        {children}
    </StyledContainer>
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Container;
