/**
 * button field component
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ButtonField = (props) => {
    const [ input, setInput ] = useState();

    const renderButton = () => {
        if(props.href) {
            return <a href={props.href} target="_blank" rel="noreferrer" >{props.label}</a>
        }
        return <button className="ui teal right labeled icon button" onClick={() => { props.handleClick(input, props.index) } }>
                <i className="plus icon"></i> {props.label}
            </button>
    }

    return <div className="ui action input" style={{ margin: '0.2rem'}}>
                <input type="text" value={input} onChange={(value) => { setInput(value.target.value) }}/>
                {renderButton()}
            </div>
};

ButtonField.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    fluid: PropTypes.bool,
    href: PropTypes.string,
}

export default ButtonField;