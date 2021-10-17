import React from 'react';
import PropTypes from 'prop-types';

const AddButton = ({ label, onClick, onClickValue }) => {
    return <div className="ui horizontal divider">
                <div onClick={() => { onClick( onClickValue ) }} className="ui teal labeled icon button" style={{ height: '100%' }}>
                    {label}
                    <i className="add icon"></i>
                </div>
            </div>
}

AddButton.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onClickValue: PropTypes.any.isRequired
}

export default AddButton;