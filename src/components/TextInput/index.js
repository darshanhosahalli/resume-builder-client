import react, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = Styled.div`
    position: relative;
    height: 50px;
    overflow: hidden;
    & input {
        width: 100%;
        height: 100%;
        color: #111;
        padding-top: 20px;
        border: none;
        outline: none;
        background: transparent;
        font-size: 1.4rem;
    }
    & label {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        border-bottom: 1px solid #000;
    }
    & label::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -1px;
        width: 100%;
        height: 100%;
        border-bottom: 3px solid #5fa8d3;
        transform: translateX(-100%);
        transition: all .3s ease;
    }
    & span {
        position: absolute;
        bottom: 5px;
        left: 0;
        transition: all .3s ease;
    }
    & input:focus + label span, 
    & input:valid + label span {
        transform: translateY(-150%);
        font-size: 14px;
        color: #5fa8d3;
    }
    & input:focus + label::after, 
    & input:valid + label::after {
        transform: translateX(0%);
    }
`;

const TextInput = ({ text, index, onUpdate, editable}) => {

    let inputArray = [];

    const setInput = (inputArray, text, textIndex) => {
        inputArray[textIndex] = text;
        onUpdate(index, inputArray.join(""));
    }

    const renderInput = () => {
        const inputArray = text.match(/.{1,40}/g);
        if(inputArray == null) {
            return <Input>
                    <input type="text" name="name" value={""} onChange={(value) => { setInput([""], value.target.value, 0) }} autoComplete="off" autoFocus required disabled={!editable}/>
                    <label htmlFor="name">
                        <span>
                        </span>
                    </label>
                </Input>
        }
        return inputArray.map((item, index) => {
            return <Input key={index}>
                        <input type="text" name="name" value={item} onChange={(value) => { setInput(inputArray, value.target.value, index) }} autoComplete="off" autoFocus required disabled={!editable}/>
                        <label htmlFor="name">
                            <span>
                            </span>
                        </label>
                    </Input>
        });
    };

    return <div style={{ margin:'25px'}}>
            {renderInput()}
        </div>
}

export default TextInput;