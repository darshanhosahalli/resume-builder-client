import React, { useState, useContext } from 'react';
import Styled from 'styled-components';
import { SelectDomain, DeleteSkill } from './actions';
import { connect } from 'react-redux';
import SelectedSkillSelector from './selector';
import DropDown from '../../components/DropDown';
import EditContext from '../../utils/EditContext';
import DeleteButton from '../../components/Button/DeleteButton';
import IconTextButton from '../../components/Button/IconTextButton';

const StyledSkillBoard = Styled.div`
    width: 375px;
    height: 375px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);
    padding: 1rem;
`;

const HeaderSection = Styled.section`
    display: flex;
    align-items: center;
`;

const ContentSection = Styled.section`
    overflow: auto;
    height: 300px;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

const SkillBoard = (props) => {

    const editContext = useContext(EditContext);

    const options = [
        { label: 'Front End', icon : '/images/skills/front-end.jpeg'},
        { label: 'Back End', icon : '/images/skills/backend.jpeg'},
        { label: 'Dev ops', icon : '/images/skills/dev-ops.jpeg'},
        { label: 'Mobile', icon : '/images/skills/mobile-end.png'},
        { label: 'Desktop', icon : '/images/skills/desktop.png'},
        { label: 'Software', icon : '/images/skills/software.jpeg'},
        { label: 'Enterprise', icon : '/images/skills/enterprise.png'},
        { label: 'Cloud', icon : '/images/skills/cloud-computing.png'},
        { label: 'DB', icon : '/images/skills/databse.png'},
    ]

    const fontEndSkills = [
        { label: 'HTML', icon: '/images/skills/front-end/html.png'},
        { label: 'css', icon: '/images/skills/front-end/css3.jpeg'},
        { label: 'sass', icon: '/images/skills/front-end/sass.png'},
        { label: 'JavaScript', icon: '/images/skills/front-end/javascript.png'},
        { label: 'ReactJs', icon: '/images/skills/front-end/react.png'},
        { label: 'Redux', icon: '/images/skills/front-end/redux.png'},
        { label: 'ReduxForm', icon: '/images/skills/front-end/redux-form.jpeg'},
        { label: 'ReactRouter', icon: '/images/skills/front-end/react-router-logo-png-transparent.png'},
        { label: 'ReduxSaga', icon: '/images/skills/front-end/Redux-Saga-Logo.png'},
        { label: 'ReactJs', icon: '/images/skills/front-end/react.png'},
        { label: 'Redux', icon: '/images/skills/front-end/redux.png'},
        { label: 'ReduxForm', icon: '/images/skills/front-end/redux-form.jpeg'},
        { label: 'ReactRouter', icon: '/images/skills/front-end/react-router-logo-png-transparent.png'},
        { label: 'ReduxSaga', icon: '/images/skills/front-end/Redux-Saga-Logo.png'}
    ]

    const selectedOption = (domain) => {
        props.SelectDomain(props.selectedSkillIndex, domain);
    }

    const deleteSkillBoard = () => {
        props.DeleteSkill(props.selectedSkillIndex);
    }

    const renderIcons = () => {

        const selectSkill = () => {
            console.log('skill selected')
        }

        return fontEndSkills.map((item, index) => {
            return <IconTextButton key={index}
                        icon={item.icon}
                        label={item.label}
                        selected={false}
                        onClick={selectSkill}
                    />
        })
    }

    return <StyledSkillBoard>
        <HeaderSection>
            <DropDown
                options={options}
                selectedOption={props.selectedSkill.domain}
                selectOption={selectedOption}
            />
            <DeleteButton
                onClickHandler={deleteSkillBoard}
            />
        </HeaderSection>
        <ContentSection>
            {renderIcons()}
        </ContentSection>
    </StyledSkillBoard>
}

const mapStateToProps = state => {
    return { 
        selectedSkillIndex: state.skills.selectedSkill,
        selectedSkill: SelectedSkillSelector(state)
    } ;
}

export default connect(mapStateToProps,{ SelectDomain, DeleteSkill })(SkillBoard);