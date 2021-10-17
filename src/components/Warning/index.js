import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
    return (
        <div class="ui bottom attached warning message">
            {props.children}
        </div>
    );
}

Message.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Message;