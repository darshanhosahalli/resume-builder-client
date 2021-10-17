/**
 * Skill list component 
 */

import React, { useContext } from 'react';
import { connect } from 'react-redux';

import Styled from 'styled-components';
import SkillBoard from '../SkillBoard/index';
import EditContext from '../../utils/EditContext';
import { AddSkill, SelectedSkill } from './actions';
import _ from 'lodash';
import IconImage from '../../components/image/icon';
import TitleRibbon from '../../components/TitleRibbon';
import Wrapper from '../../components/Wrapper';

const StyledDiv = Styled.div`
    display: flex;
    flex-direction: row;
`;

const SkillList = (props) => {

    const initialState = { domain: '', tools: [] };
    const editContext = useContext(EditContext);
    const skills = props.skills.skills;

    const renderButton = (domain) => {
        if( _.isEmpty(domain) ) {
            return <React.Fragment>
                <i className="edit icon"></i>
                Domain
            </React.Fragment>
        }
        return <React.Fragment>
                <IconImage src={domain.icon} alt={domain.label}/>
                {domain.label}
            </React.Fragment>
    }

    const renderDomainList = () => {
        return skills.map(({ domain },index) => {
            return <a key={index} onClick={ () => { props.SelectedSkill(index); }} className="item" style={{ display: 'flex', alignItems: 'center', height: '5rem', width: '6.5rem' }}>
                {renderButton(domain)}
            </a>
        });
    }

    const renderAddSkill = () => {
        if( editContext && skills.length < 5 ) {
            return (<a className="item" onClick={ () => { props.AddSkill({id: `skill-10${skills.length+1}`, ...initialState }) }}>
            <i className="plus icon"></i>
            Skill
        </a>);
        }
    }

    return <Wrapper>
            <TitleRibbon title="Skills"/>
            <StyledDiv>
                <div className="ui vertical labeled icon menu" style={{ alignSelf: 'flex-start' }}>
                    {renderDomainList()}
                    {renderAddSkill()}
                </div>
                <SkillBoard/>
            </StyledDiv>
        </Wrapper>
}

const mapStateToProps = state => {
    return { skills: state.skills } ;
}

export default connect(mapStateToProps,{ AddSkill, SelectedSkill })(SkillList);