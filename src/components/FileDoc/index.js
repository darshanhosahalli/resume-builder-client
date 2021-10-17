import React from 'react';
import Styled from 'styled-components';

const StyledFileDoc = Styled.div`
    margin: 0.2rem;
    width: 5rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #fff;
    border-radius: 5px;
    cursor: pointer;
    & > i {
        font-size: 2.5rem;
        margin: 0.5rem;
    } 
    & > span {
        display: inline-block;
        width: 5rem;
        text-align: center;
        white-space: nowrap;
        overflow: hidden !important;
        text-overflow: ellipsis;
    }
`;

const FileDoc = () => {
    return <StyledFileDoc>
        <i class="file pdf icon"></i>
        <span>FileName ajskncsdnclksdncnl</span>
    </StyledFileDoc>
}

export default FileDoc;