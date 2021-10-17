import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const StyledDiv = Styled.div`
    margin: 1rem;
    display: flex;
    justify-content: center;
`;


const Button = (props) => {
    const classString = `ui ${props.huge? 'huge' : ''} ${props.icon? 'labeled icon' : ''} primary ${props.inverted? 'basic' : ''} button`;
    const icon = `${props.icon} icon`;
    if(props.href) {
        return <a href={props.href} className={classString}>{props.children}</a>;
    }
    return <StyledDiv>
        <button className={classString}>
            {props.children}
            {props.icon? <i className={icon}></i> : ''}
        </button>
    </StyledDiv>;
}

Button.propTypes = {
    href: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    inverted: PropTypes.bool,
    type: PropTypes.string,
    huge: PropTypes.string,
    icon: PropTypes.string
}

export default Button;