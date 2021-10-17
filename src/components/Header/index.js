/**
 * Header component
 */

import React from 'react';
import PropTypes from 'prop-types';
import HeaderStyle from './header';

const Header = (props) => {
    return <HeaderStyle>
                <div className="ui container">
                    <div className="ui large secondary menu">
                        {props.children}
                    </div>
                </div>
        </HeaderStyle>
};

Header.propTypes = {
    children: PropTypes.any.isRequired,
}

export default Header;