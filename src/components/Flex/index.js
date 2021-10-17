import React from 'react';
/**
 * Flex container component
 */

import Styled from 'styled-components';
import PropTypes from 'prop-types';

const FlexContainer = Styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Flex = (props) => {
    return <FlexContainer>
        {props.children}
    </FlexContainer>
}

Flex.propTypes = {
    children: PropTypes.node.isRequired
}

export default Flex;