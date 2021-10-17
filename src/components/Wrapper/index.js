import react from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const WrapperDiv = Styled.div`
    z-index: 2;
    display: grid;
    grid-template-rows: 5rem auto;
    grid-template-columns: 100%;
    width: 100%;
    grid-row-gap: 10px;
`;

const Wrapper = ({ children }) => {
    return <WrapperDiv>
        {children}
    </WrapperDiv>
}

Wrapper.propTypes = {
    children: PropTypes.any,
}

export default Wrapper;