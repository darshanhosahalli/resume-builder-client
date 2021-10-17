/**
 * Skill board actions
 */

import { SELECT_DOMAIN, DELETE_SKILL } from './constants';

export const SelectDomain = (index, domain = {}) => {
    return {
        type: SELECT_DOMAIN,
        payload: {
            index,
            domain
        }
    }
}

export const DeleteSkill = (index) => {
    return {
        type: DELETE_SKILL,
        payload: {
            index,
        }
    }
};


