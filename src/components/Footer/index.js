import React from 'react';
import Styled from 'styled-components';

const StyledFooter = Styled.footer`
    display: flex;
    padding: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Footer = () => {
    return <StyledFooter>
        <h4>&copy; Darshanhosahalli@gmail.com</h4>
        For non Commerical Use only
    </StyledFooter>
}

export default Footer;