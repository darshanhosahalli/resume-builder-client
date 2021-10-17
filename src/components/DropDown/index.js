import React, { useState } from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import _ from 'lodash';

const StyledSelect = Styled.div`
    display: ${props => props.menuClicked? 'block' : 'none' }!important;
`;

const DropDown = ({ options, selectedOption, selectOption }) => {

    const [ clicked, setClicked ] = useState(false);

    const renderOptions = () => {
        return options.map((item, index) => {
            return <div key={index} className="item" data-value="jenny" onClick={() => { selectOption( { label: item.label, icon: item.icon }) }}>
                        <img className="ui mini avatar image" src={item.icon}/>
                        {item.label}
                    </div>
        });
    }

    const renderOption = () => {
        if(_.isEmpty(selectedOption)) {
            return <div className="default text">
                        Select Option
                    </div>
        }
        return <div className="text">
                    <img className="ui mini avatar image" src={selectedOption.icon}/>
                    {selectedOption.label}
                </div>
    }

    return <div className="ui fluid selection active dropdown" onClick={() => { setClicked(!clicked) }}>
        <input type="hidden" name="user"/>
            <i className="dropdown icon"></i>
            {renderOption()}
            <StyledSelect className="menu" menuClicked={clicked}>
                {renderOptions()}
            </StyledSelect>
    </div>
}

DropDown.propTypes = {
    options: PropTypes.array.isRequired,
    selectedOption: PropTypes.object.isRequired,
    selectOption: PropTypes.func.isRequired,
}

export default DropDown;