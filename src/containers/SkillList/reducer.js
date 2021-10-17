/**
 * Skill List reducer
 */

import { ADD_SKILL, SELECED_SKILL } from './constants'
import { SELECT_DOMAIN, DELETE_SKILL } from '../SkillBoard/constants';
import { produce } from 'immer'

const initialState = {
    skills: [
        {
            id: 'skill-101',
            domain: {}, 
            tools: [],
        }
    ],
    selectedSkill: 0,
};

const skillReducers = (state = initialState, action) => 
    produce(state, draft => {
        switch (action.type) {
                case ADD_SKILL:
                    draft.skills.push(action.payload);
                    break;
                case SELECED_SKILL:
                    draft.selectedSkill = action.payload;
                    break;
                case SELECT_DOMAIN:
                    const { index } = action.payload;
                    draft.skills[index].domain = action.payload.domain;
                    break;
                case DELETE_SKILL:
                    draft.skills.splice(action.payload,1);
                default:
                    return draft;
            }
        }
    );
    
export default skillReducers;