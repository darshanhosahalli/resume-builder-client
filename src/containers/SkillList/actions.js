/**
 * Skill List actions
 */

import { ADD_SKILL, SELECED_SKILL } from './constants';

export const AddSkill = (skill = {}) => {
    return {
        type: ADD_SKILL,
        payload: skill
    }
}


export const SelectedSkill = (skill = {}) => {
    return {
        type: SELECED_SKILL,
        payload: skill
    }
};