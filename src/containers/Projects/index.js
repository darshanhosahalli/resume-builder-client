import React, { useContext, useState } from 'react';
import { connect } from 'react-redux';
import Styled from 'styled-components';

import { AddProject, EditProject, DeleteProject, AddTag, DeleteTag } from './actions';
import EditContext from '../../utils/EditContext';
import ButtonField from '../../components/ButtonField';
import DeleteButton from '../../components/Button/DeleteButton';
import TitleRibbon from '../../components/TitleRibbon';
import Wrapper from '../../components/Wrapper';
import AddButton from '../../components/AddButton';


const StyledEditabledDiv = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const DivContainer = Styled.div`
    width: 100%;
`;

const StyledAccordian = Styled.div`
    width: 85% !important;
`;


const Projects = (props) => {

    const initialState = { id:'', title:'', description:'', github: '', livesite: '', tags: []};
    const editContext = useContext(EditContext);
    const [ selectedProject, setSelectedProject ] = useState(initialState);

    let project = props.projects.projects;

    const updateProject = (index, key, value) => {
        props.EditProject(index, key, value);
    }

    const deleteProject = (index) => {
        props.DeleteProject(index);
    }

    const renderInput = (index) => {
        if(editContext && project[index].id === selectedProject.id) {
            return  <StyledEditabledDiv>
                        <div className="ui input">
                            <input type="text" placeholder={project[index].title} value={project[index].title} onChange={(value) => { updateProject(index, 'title', value.target.value) }}/>
                        </div>
                        <i className="trash alternate icon" onClick={() => deleteProject(index) }></i>
                </StyledEditabledDiv>
        }
        return project[index].title
    }

    const renderTextarea = (index) => {
        if(editContext && project[index].id === selectedProject.id) {
            return  <div className="ui form">
                        <div className="field">
                            <textarea type="text" placeholder={project[index].description} value={project[index].description} onChange={(value) => { updateProject(index, 'description', value.target.value) }}/>
                        </div>
                    </div>
        }
        return <p>{project[index].description}</p>
    }

    const disabled = editContext? false: true;

    const renderProjects = () => {
        return project.map((item,index) => {
            const active = item.id === selectedProject.id ? 'active' : '';
            return <div key={item.id} onClick={() => { setSelectedProject(item) }}>
                <div className={`${active} title`}>
                    <i className="dropdown icon"></i>
                    {renderInput(index)}
                </div>
                <div className={`${active} content`} style={{ width: '100%' }}>
                    {renderTextarea(index)}
                    <div className="ui action fluid input" style={{ margin: '0.2rem'}}>
                        <input type="text" value={project[index].github} onChange={(value) => { updateProject(index, 'github', value.target.value) }} disabled={disabled}/>
                        <a href={`https://${project[index].github}`} target="_blank" rel="noreferrer" className="ui teal right labeled icon button">
                            <i className="git square icon"></i> Git Link
                        </a>
                    </div>
                    <div className="ui action fluid input" style={{ margin: '0.2rem'}}>
                        <input type="text" value={project[index].livesite} onChange={(value) => { updateProject(index, 'livesite', value.target.value) }} disabled={disabled}/>
                        <a href={`https://${project[index].livesite}`} target="_blank" rel="noreferrer" className="ui teal right labeled icon button">
                            <i className="linkify icon"></i> Live Site
                        </a>
                    </div>
                    {renderAddTags(index)}
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {renderTags(item, index)}
                    </div>
                </div>
            </div>
        });
    }



    const addProjectButton = () => {
        const initialProject =  { id: project.length+1, title: 'Title Here', description: 'Description Here', github: 'github link here', livesite: 'livesite link here', tags: [] }
        if(editContext) {
            return <AddButton label="Add Accomplishment"
                        onClick={props.AddProject}
                        onClickValue={initialProject}
                    />
        }
    }

    const addTag = (input, index) => {
        props.AddTag(input, index);
    }

    const renderAddTags = (index) => {
        if(editContext) {
            return <ButtonField label="Add Skills Used"
                icon="plus"
                handleClick={addTag}
                index={index}
            />
        }
    }

    const removeTag = (index, tagIndex) => {
        props.DeleteTag( tagIndex, index);
    }

    const renderTags = (project, itemIndex) => {

        const deleteTag = () => {
            removeTag( itemIndex, index)
        }

        return project.tags.map((item, index) => {
            return <div key={index} style={{ margin: '0.5rem' }}>
                        <a href="www.google.com" className="ui teal tag label">{item}</a>
                        <DeleteButton 
                            onClickHandler={deleteTag}
                        />
                    </div>
        });
    }

    return  <Wrapper>
                <TitleRibbon title="Projects"/>
                <DivContainer>
                    <StyledAccordian className="ui styled accordion">
                        {renderProjects()}
                    </StyledAccordian>
                    {addProjectButton()}
                </DivContainer>
        </Wrapper>
}   

const mapStateToProps = state => {
    return { projects: state.projects } ;
}
 
export default connect(mapStateToProps,{ AddProject, EditProject, DeleteProject, AddTag, DeleteTag })(Projects);