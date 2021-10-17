import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../Flex';

const FormCard = (props) => {
    return (
        <div class="ui card">
            <div style={{ display: Flex, justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}} class="content">
                <div class="header" style={{ textAlign: 'center', textTransform: 'uppercase'}}>{props.formTitle}</div>
            </div>
            <div class="content-space" style={{ padding: "0.5rem" }}>
                {props.children}
            </div>
        </div>
    );
}

FormCard.propTypes = {
    children: PropTypes.node.isRequired,
    formTitle: PropTypes.string.isRequired,
}

export default FormCard;