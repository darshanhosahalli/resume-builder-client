import React from 'react';
import Styled from 'styled-components';
import FileDoc from '../FileDoc';

const StyledFileDrop = Styled.div`
    font-family: "Quicksand", sans-serif;
    font-weight: 500;
    font-size: 20px;
    cursor: pointer;
    color: #cccccc;
    background: #fff;
    border: 4px dashed #009578;
    border-radius: 10px;
    width: 25rem;
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    & > input {
      display: none;
    }
`;

const StyledFileDiv = Styled.div`
    width: 25rem;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

class FileDrop extends React.Component {
    constructor(props) {
      super(props)
      this.state = { files: [], error: false };
      this.fileupload = React.createRef();
    }

    fileUpload = () => {
      this.fileupload.current.click();
    }

    onFileUpload = () => {
      console.log(this.fileupload.current.files);
    }

    handleOnDragOver = (event) => {
      event.preventDefault();
    }

    renderFiles() {
      if(this.state.error) {
        return <div style={{ display:'flex', margin:'1rem' }} class="ui negative message">
          <i class="exclamation triangle icon"></i>
          <div class="header">
            Please upload a pdf file
          </div>
        </div>
      } else {
        return this.state.files.map((item,index) => {
          console.log('item',item[0].type);
          return <FileDoc key={index}/>
        });
      }
    }

    handleOnDrop = (event) => {
      event.preventDefault();
      const files = event.dataTransfer.files;
      const type = files[0].type;
      if(type!='application/pdf') {
        this.setState({ error: true });
      } else {
        this.setState({ files: this.state.files.concat(event.dataTransfer.files), error: false });
      }
    }

    render() {
      return <React.Fragment>
          <StyledFileDrop onDrop={this.handleOnDrop} onDragOver={this.handleOnDragOver} onClick={this.fileUpload}> 
            <input onChange={this.onFileUpload} ref={this.fileupload} type="file"/>
            Drag and Drop Files here or click to upload files.
          </StyledFileDrop>
          <StyledFileDiv>
            {this.renderFiles()}
          </StyledFileDiv>
      </React.Fragment>
    }
}

export default FileDrop;